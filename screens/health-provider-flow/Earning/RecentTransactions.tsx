import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const RecentTransactions = () => {
  const transactions = [
    { type: 'Received', amount: '+₦300,000', date: '2nd April 2024, 10:30 AM', status: 'Successful' },
    { type: 'Received', amount: '+₦300,000', date: '2nd April 2024, 10:30 AM', status: 'Successful' },
    { type: 'Withdraw', amount: '-₦300,000', date: '2nd April 2024, 10:30 AM', status: 'Successful' },
    { type: 'Received', amount: '+₦300,000', date: '2nd April 2024, 10:30 AM', status: 'Successful' },
    { type: 'Withdraw', amount: '-₦300,000', date: '2nd April 2024, 10:30 AM', status: 'Successful' },
    { type: 'Withdraw', amount: '-₦300,000', date: '2nd April 2024, 10:30 AM', status: 'Successful' },
    { type: 'Withdraw', amount: '-₦300,000', date: '2nd April 2024, 10:30 AM', status: 'Successful' },
    { type: 'Received', amount: '+₦300,000', date: '2nd April 2024, 10:30 AM', status: 'Successful' },
    { type: 'Withdraw', amount: '-₦300,000', date: '2nd April 2024, 10:30 AM', status: 'Successful' },
    { type: 'Withdraw', amount: '-₦300,000', date: '2nd April 2024, 10:30 AM', status: 'Successful' },
    { type: 'Withdraw', amount: '-₦300,000', date: '2nd April 2024, 10:30 AM', status: 'Successful' },
    { type: 'Received', amount: '+₦300,000', date: '2nd April 2024, 10:30 AM', status: 'Successful' },
    { type: 'Withdraw', amount: '-₦300,000', date: '2nd April 2024, 10:30 AM', status: 'Successful' },
    { type: 'Withdraw', amount: '-₦300,000', date: '2nd April 2024, 10:30 AM', status: 'Successful' },
  ];

  const handleTransactionPress = (txn) => {
    console.log('Pressed transaction:', txn);
    // You can navigate to a transaction detail screen here if needed
  };

  return (
    <ScrollView className="flex-1 bg-white px-4 pt-6">
         <View className="flex-row justify-between items-center mt-20">
                  <Text className="text-base font-black">Recent Transactions</Text>
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
          {/* Icon */}
          <View className="w-10 h-10 rounded-full bg-white justify-center items-center mr-4 shadow-sm mt-2">
            <FontAwesome
              name={txn.type === 'Received' ? 'arrow-down' : 'arrow-up'}
              size={18}
              color={txn.type === 'Received' ? '#16a34a' : '#dc2626'}
            />
          </View>

          {/* Details */}
          <View className="flex-1">
            <Text className="text-sm font-medium">{txn.type}</Text>
            <Text className="text-xs text-gray-500">{txn.date}</Text>
          </View>

          {/* Amount and Status */}
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
  );
};

export default RecentTransactions;
