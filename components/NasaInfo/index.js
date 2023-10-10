import { useState, useEffect } from 'react';
import axios from "axios";
import { StyleSheet, Text, View, Button } from 'react-native';
import { Image } from 'expo-image'


export default function NasaInfo() {
    const myAPI = process.env.EXPO_PUBLIC_API_URL;
    const [data, setData] = useState();
    const year = "2023";
    const month = "01";
    const day = "01";


    const monthNames = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



    const url = `https://api.nasa.gov/EPIC/api/natural/date/${year}-${month}-${day}?&api_key=${myAPI}`;

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                console.clear();
                console.log(response);
                setData(response.data);
            }).catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <>
            {
                data && data.map((a, index) => {
                    return (
                        <View key={index}>
                            <View>
                                <Text style={styles.text}>
                                    Image #{index + 1}
                                </Text>
                            </View>

                            <View>
                                <Text style={styles.text}>
                                    {a.caption.toUpperCase()}
                                </Text>
                            </View>

                            <View>
                                <Text style={styles.text}>
                                    Date: {monthNames[Number(a.date.slice(5, 7)) - 1]}, {Number(a.date.slice(8, 10))}, {Number(a.date.slice(0, 4))}
                                </Text>
                            </View>
                            
                            <Image source={`https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${a.image}.png`} alt="" height={200} width={200} />
                            <View>
                                <Text style={styles.text}> 
                                    x: {a.centroid_coordinates.lat.toFixed(2)} y:{a.centroid_coordinates.lon.toFixed(2)}
                                </Text>
                            </View>
                        </View>
                    )
                })
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white'
    }
});