import { Header } from "components/utilities/headers";
import { primarycolor } from "constants/color";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CustomerSupport: React.FC = () => {
    return (
        <>
            <ScrollView className="py-4 px-6 flex-1">
                <Text>Your Health, Our Priority – We're Here to Help!</Text>
                <View className="h-4" />
                <Text>
                    Thank you for choosing WESTACARE to support your health journey. We're
                    committed to providing you with the best possible experience, and
                    we're here to assist you every step of the way.
                </Text>
                <View className="h-4" />
                <Text className="font-semibold">How We Can Help You </Text>
                <Text>
                    1. Account Assistance: Forgot your password? Trouble logging in? Let
                    us help you regain access quickly.
                </Text>
                <Text>
                    2. Feature Guidance: Need help navigating the app or understanding how
                    a feature works? We’ll guide you step-by-step.
                </Text>
                <Text>
                    3.Technical Support: Encountering a glitch or error? Share the
                    details, and we’ll fix it for you promptly.
                </Text>
                <Text>
                    4. Feedback & Suggestions: Your insights help us improve! Share your
                    thoughts or suggest features you’d love to see.
                </Text>
                <View className="h-4" />
                <Text className="font-semibold">Contact Us Anytime</Text>
                <Text>
                    -In-App Chat: Reach us directly through the app under the “Support”
                    section.
                </Text>
                <Text>- Email: Write to us at [support email address]. </Text>
                <Text>- Phone: Call us at [phone number]. </Text>
                <Text>- FAQ Section: Find answers to common questions at </Text>
                <View className="h-4" />
                <Text>
                    Our support team is available [specific hours/days], and we strive to
                    respond within [response time, e.g., 24 hours].
                </Text>
                <View className="h-4" />
                <Text>
                    Your health and satisfaction are our top priorities. If there's
                    anything you need, don’t hesitate to reach out.
                </Text>
                <View className="h-4" />
                <Text>Stay healthy,</Text>
                <Text>
                    <Text className="font-semibold">WESTACARE</Text> Support Team
                </Text>
            </ScrollView>
        </>
    );
};

export default CustomerSupport;
