import { ScrollView, View } from "react-native";
import {
    CustomInputSearch,
    Header,
    Providercard,
} from "../../../../components/mycomponent";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { StackNavigation } from "../../../../types/stack";

const ListofHealthprovider = () => {
    const navigation = useNavigation<StackNavigation>();
    const [searchValue, setSearchValue] = useState("");
    return (
        <>
            <View className="w-full h-full flex">
                <Header title={"List of Health Provider"} />
                <View className="mt-3 px-3">
                    <CustomInputSearch
                        placeholder="Search for chat"
                        leftIcon={<FontAwesome name="search" color="#000" size={20} />}
                        value={searchValue}
                        onChange={(text) => setSearchValue(text)}
                    />
                </View>
                <View className="items-center mt-5 flex-1">
                    <ScrollView>
                        <Providercard
                            name="Dr Micheal Brains"
                            title="Gyneacologist"
                            rating={5}
                            reviews={50}
                            likes={100}
                            image="image_url_1"
                            onPress={() => navigation.navigate("apponitmentdetails")}
                        />
                        <Providercard
                            name="Dr Adeola Segusi"
                            title="Neulogist"
                            rating={5}
                            reviews={50}
                            likes={80}
                            image="image_url_2"
                            onPress={() => navigation.navigate("apponitmentdetails")}
                        />
                        <Providercard
                            name="Dr Babalola Tope"
                            title="General Medical Practioner"
                            rating={5}
                            reviews={50}
                            likes={120}
                            image="image_url_3"
                            onPress={() => navigation.navigate("apponitmentdetails")}
                        />
                        <Providercard
                            name="Dr Babalola Tope"
                            title="General Medical Practioner"
                            rating={5}
                            reviews={50}
                            likes={120}
                            image="image_url_3"
                            onPress={() => navigation.navigate("apponitmentdetails")}
                        />
                        <Providercard
                            name="Dr Babalola Tope"
                            title="General Medical Practioner"
                            rating={5}
                            reviews={50}
                            likes={120}
                            image="image_url_3"
                            onPress={() => navigation.navigate("apponitmentdetails")}
                        />
                        <Providercard
                            name="Dr Madame Koko"
                            title="Optomist"
                            rating={5}
                            reviews={50}
                            likes={90}
                            image="image_url_4"
                            onPress={() => navigation.navigate("apponitmentdetails")}
                        />
                    </ScrollView>
                </View>
            </View>
        </>
    );
};
export default ListofHealthprovider;
