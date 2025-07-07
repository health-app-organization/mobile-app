import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const transactions = [
  { type: 'Received', amount: '+₦300,000', date: '2nd April 2024, 10:30 AM', status: 'Successful' },
  { type: 'Received', amount: '+₦300,000', date: '2nd April 2024, 10:30 AM', status: 'Successful' },
  { type: 'Withdraw', amount: '-₦300,000', date: '2nd April 2024, 10:30 AM', status: 'Successful' },
  { type: 'Received', amount: '+₦300,000', date: '2nd April 2024, 10:30 AM', status: 'Successful' },
  { type: 'Withdraw', amount: '-₦300,000', date: '2nd April 2024, 10:30 AM', status: 'Successful' },
  { type: 'Withdraw', amount: '-₦300,000', date: '2nd April 2024, 10:30 AM', status: 'Successful' },
];

const EarningsScreen = () => {
  const handleTransactionPress = (txn:any) => {
    console.log('Tapped transaction:', txn);
  };
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white pt-36 px-4">
      {/* Withdraw Button */}
      <TouchableOpacity
      //onPress={() => navigation.navigate('Withdraw')}
      className="bg-[#0099B8] py-5 rounded-xl border border-white w-80 self-center"
      style={{
        shadowColor: '#0099B8',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 6,
      }}
    >
      <Text className="text-white text-center font-black text-base">
        Withdraw
      </Text>
    </TouchableOpacity>


      
      <ScrollView className="mt-6" showsVerticalScrollIndicator={false}>
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-base font-black">Recent Transactions</Text>
          <TouchableOpacity 
          //onPress={() => navigation.navigate("RecentTransactions")}
          >
    <Text className="text-[#0099B8] text-sm font-black">See all</Text>
  </TouchableOpacity>
        </View>

        {transactions.map((txn, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleTransactionPress(txn)}
            activeOpacity={0.8}
            className={`flex-row items-center p-4 rounded-xl mb-3 ${
              txn.type === 'Received' ? 'bg-green-50' : 'bg-red-50'
            }`}
          >
           
            <View className="w-10 h-10 rounded-full bg-white justify-center items-center mr-4 shadow-sm">
              <FontAwesome
                name={txn.type === 'Received' ? 'arrow-down' : 'arrow-up'}
                size={18}
                color={txn.type === 'Received' ? '#16a34a' : '#dc2626'}
              />
            </View>

            
            <View className="flex-1">
              <Text className="text-sm font-medium">{txn.type}</Text>
              <Text className="text-xs text-gray-500">{txn.date}</Text>
            </View>

            
            <View className="items-end">
              <Text
                className={`text-sm font-bold ${
                  txn.type === 'Received' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {txn.amount}
              </Text>
              <Text className="text-xs text-green-600">{txn.status}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default EarningsScreen;
