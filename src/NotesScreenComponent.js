import React from 'react';
import  {Text, FlatList, View}  from 'react-native';

// a react component is nothing but a javascript function

const NotesScreenComponent = () => {

    var data = [
        {"date": "24-10-1998", "text": "I am going to Dubai"},
        {"date": "24-02-2002", "text": "I have to bring vegatbles"}
    ]

    // to write javascript inside jsx, i need to enclose javascript code in {}
    // {name: 'abc', 'age': 12} -> {name} -> {name: 'abc'}
    // item , index
    return <View>
        <FlatList 
            data={data}
renderItem={({item}) => <Text> {item.text}</Text>}
            
        />
    </View>

}


export default NotesScreenComponent;