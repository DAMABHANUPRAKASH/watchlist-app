import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    backgroundColor: '#1c1c1c',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  tableHeaderText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  starIcon: {
    fontSize: 24,
    color: 'yellow',
  },
  tableDivider: {
    height: 1,
    backgroundColor: '#333',
  },
  watchlistContainer: {
    marginBottom: 10,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'transparent',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5, 
  },
  iconCard: {
    backgroundColor: '#333',
    borderRadius: 4,
    padding: 2,
    width: 30,
    height: 30,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  icon: {
    fontSize: 20,
    color: 'white',
  },
  name: {
    fontSize: 18,
    color: 'white',
    marginLeft: 10, 
  },
  expandIcon: {
    fontSize: 18,
    color: 'white',
  },
  tickerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
  },
  symbol: {
    color: 'white',
    fontSize: 16,
    width: 60,
  },
  priceContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  price: {
    color: 'white',
    fontSize: 16,
  },
  change: {
    fontSize: 14,
  },
  emptyText: {
    color: 'white',
    textAlign: 'center',
    padding: 20,
  },
});