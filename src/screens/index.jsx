import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './style';

export default function Home() {
  const [fact, setFact] = useState('');

  useEffect(() => {
    loadRandomYearFact();
  }, []);

  const loadRandomYearFact = () => {
    fetch('http://numbersapi.com/random/year?json')
      .then(response => response.json())
      .then(data => {
        setFact(data.text);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aperte o botão abaixo para ver um fato sobre um ano aleatorio!</Text>
      <Text style={styles.btn} onPress={loadRandomYearFact} >Aperte aqui! </Text>
      <Text style={styles.fato}>{fact}</Text>
    </View>
  );
}
