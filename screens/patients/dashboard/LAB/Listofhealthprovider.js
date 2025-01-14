import { ScrollView, View } from "react-native"
import { CustomInputSearch, Header, Providercard } from "../../../mycomponents/mycomponent"
import { useNavigation } from "@react-navigation/native"

const ListofHealthprovider=()=>{
    const navigation=useNavigation('')
    return(
        <>
        <View className="w-full h-full flex">
            <Header
            title={'List of Health Provider'}
            />
            <View className="mt-3 px-3">
                <CustomInputSearch
                   placeholder="Search for chat"
                   leftIconName="search" // Use FontAwesome email icon
                   onChange={(text) => console.log(text)}
                />
            </View>
            <View className="items-center mt-5 flex-1">
                <ScrollView>
                <Providercard
                 name="Dr Micheal Brains"
                 title="Gyneacologist"
                 rating={5}
                 reviews={50}
                 onPress={() => navigation.navigate("apponitmentdetails")}
                />
                <Providercard
                 name="Dr Adeola Segusi"
                 title="Neulogist"
                 rating={5}
                 reviews={50}
                 onPress={() => navigation.navigate("apponitmentdetails")}
                />
                 <Providercard
                 name="Dr Babalola Tope"
                 title="General Medical Practioner"
                 rating={5}
                 reviews={50}
                 onPress={() => navigation.navigate("apponitmentdetails")}
                />
                  <Providercard
                 name="Dr Babalola Tope"
                 title="General Medical Practioner"
                 rating={5}
                 reviews={50}
                 onPress={() => navigation.navigate("apponitmentdetails")}
                />
                  <Providercard
                 name="Dr Babalola Tope"
                 title="General Medical Practioner"
                 rating={5}
                 reviews={50}
                 onPress={() => navigation.navigate("apponitmentdetails")}
                />
                 <Providercard
                 name="Dr Madame Koko"
                 title="Optomist"
                 rating={5}
                 reviews={50}
                 onPress={() => navigation.navigate("apponitmentdetails")}
                />

                </ScrollView>
               
            </View>

        </View>
        </>
    )
}
export default ListofHealthprovider