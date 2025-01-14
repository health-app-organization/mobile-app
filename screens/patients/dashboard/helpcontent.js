import { View, Text } from "react-native";
import React from "react";

export const HelpContent = () => {
  return (
    <View className="px-4 py-6">
      <Text className="text-black mb-4  ">
        Your Health, Our Priority - We're Here to Help!
      </Text>
      
      <Text className="text-black mb-6">
        Thank you for choosing WESTACRE to support your health journey. We're committed to providing you with the best possible experience, and we're here to assist you every step of the way.
      </Text>

      <Text className="text-black font-semibold mb-3">How We Can Help You</Text>
      
      <View className="space-y-3 mb-6">
        <Text className="text-black">
          1. Account Assistance: Forgot your password? Trouble logging in? Let us help you regain access quickly.
        </Text>
        <Text className="text-black">
          2. Feature Guidance: Need help navigating the app or understanding how a feature works? We'll guide you step-by-step.
        </Text>
        <Text className="text-black">
          3. Technical Support: Encountering a glitch or error? Share the details, and we'll fix it for you promptly.
        </Text>
        <Text className="text-black">
          4. Feedback & Suggestions: Your insights help us improve! Share your thoughts or suggest features you'd love to see.
        </Text>
      </View>

      <Text className="text-black font-semibold mb-3">Contact Us Anytime</Text>
      
      <View className="space-y-2 mb-6">
        <Text className="text-black">- In-App Chat: Reach us directly through the app under the "Support" section.</Text>
        <Text className="text-black">- Email: Write to us at [support email address].</Text>
        <Text className="text-black">- Phone: Call us at [phone number].</Text>
        <Text className="text-black">- FAQ Section: Find answers to common questions.</Text>
      </View>

      <Text className="text-black mb-4">
        Our support team is available [specific hours/days], and we strive to respond within [response time, e.g., 24 hours].
      </Text>

      <Text className="text-black mb-4">
        Your health and satisfaction are our top priorities. If there's anything you need, don't hesitate to reach out.
      </Text>

      <Text className="text-black mb-2">Stay healthy,</Text>
      <Text className="text-black font-semibold">WESTACRE Support Team</Text>
    </View>
  );
};

