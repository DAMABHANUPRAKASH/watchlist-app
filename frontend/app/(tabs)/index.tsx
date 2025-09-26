import { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './styles';


interface TickerItem {
  symbol: string;
  price: number;
  changePct: number;
}

interface Watchlist {
  _id: string;
  name: string;
  icon: string;
  items: TickerItem[];
}


export default function Index() {
  const [watchlists, setWatchlists] = useState<Watchlist[]>([]);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/watchlists');
      const data = await response.json();
      setWatchlists(data.watchlists);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const toggleExpand = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const renderItem = ({ item }: { item: Watchlist }) => {
    const isExpanded = expanded[item._id] || false;
    const expandIcon = isExpanded ? '∨' : '∧'; 

    return (
      <View style={styles.watchlistContainer}>
        <TouchableOpacity onPress={() => toggleExpand(item._id)} style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.iconCard}>
              <Text style={styles.icon}>{item.icon}</Text>
            </View>
            <Text style={styles.name}>{item.name}</Text>
          </View>
          <Text style={styles.expandIcon}>{expandIcon}</Text>
        </TouchableOpacity>
        {isExpanded && (
          <FlatList
            data={item.items}
            keyExtractor={(item) => item.symbol}
            renderItem={({ item: ticker }) => (
              <View style={styles.tickerRow}>
                <Text style={styles.symbol}>{ticker.symbol}</Text>
                <View style={styles.priceContainer}>
                  <Text style={styles.price}>${ticker.price.toFixed(2)}</Text>
                  <Text style={[styles.change, { color: ticker.changePct > 0 ? 'green' : 'red' }]}>
                    {ticker.changePct > 0 ? '+' : ''}{ticker.changePct}%
                  </Text>
                </View>
              </View>
            )}
          />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Lists</Text>
          <Text style={styles.starIcon}>+</Text>
        </View>
        <View style={styles.tableDivider} />
        <FlatList
          data={watchlists}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
          ListEmptyComponent={<Text style={styles.emptyText}>No watchlists available</Text>}
        />
      </View>
    </View>
  );
}