import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

// Componente Content
function Content() {
  const [showDetails, setShowDetails] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleToggleDetails = () => setShowDetails(!showDetails);
  const handleLike = () => setLikes(likes + 1);

  return (
    <View style={styles.content}>
      {/* Imagem */}
      <Text>Filme</Text>
      <Image 
        source={{ uri: 'https://criticalhits.com.br/wp-content/uploads/2021/04/3d6160a085fdc21e2f5e2c27fcc6ea90-910x1058.jpg' }} 
        style={styles.image} 
      />
      <Button title={showDetails ? "Mostrar Menos" : "Mostrar Mais"} onPress={handleToggleDetails} />
      {showDetails && <Text>Em busca de um Going Merry roubado, os Piratas do Chapéu de Palha unem forças com os Thief Brothers, um par de bandidos incompatíveis com projetos na maravilhosa, mas mortal, Ilha Clockwork. Logo, uma guerra total irrompe entre eles e o clã pirata reinante da Ilha Clockwork, cujo tirânico capitão Bear King planeja não apenas conquistar os mares com uma super arma temível, mas tomar Nami como sua noiva por todos os meios necessários..</Text>}
      <Button title={`Curtir (${likes})`} onPress={handleLike} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: 300,    // Largura da imagem
    height: 200,   // Altura da imagem
    marginVertical: 20,
  },
});

export default Content;
