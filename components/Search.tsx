
import { View, TextInput } from 'react-native';;
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export function Search() {
    return (
        <View
            className="flex-row justify-between items-center w-full p-5  rounded-full border-gray-700"
        >
            <TouchableOpacity className="p-2 border border-white rounded-full">
                <Feather name="menu" size={24} color="white" />
            </TouchableOpacity>
            <TextInput
                placeholder='Look For Lyrics, Artist... '
                placeholderTextColor="white"
                className="text-gray-400 text-lg text-center placeholder:text-gray-200"
            ></TextInput>
            <TouchableOpacity className="p-2 bg-white rounded-full">
                <AntDesign name="search1" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

