import React, {useEffect, useState} from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { InformacoesUsuario } from "../../components/InformacoesUsuario";
import { CardConsulta } from "../../components/CardConsulta";
import { TelaDeFundo } from "../../components/TelaDeFundo";
import soniaFoto from "../../assets/sonia.png";
import pacientes from "./pacientes";
import styles from "./styles";
import { CardConsultaShimmerEffect } from "../../components/CardConsultaShimmerEffect";
import { InformacoesUsuarioShimmerEffect } from "../../components/InformacoesUsuarioShimmerEffect";

export default function Principal({ navigation }) {
  const [tempo, setTempo] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTempo(true);
    }, 3000);
  }, [])

  return (
    <TelaDeFundo>
    <View style={styles.container}>

      { tempo ? 
      <>
        <InformacoesUsuario 
          nome="Olá Sônia"
          detalhes="Mais 4 consultas hoje"
          foto={soniaFoto}
          />

        <Text style={styles.texto}>Hoje</Text>

        <FlatList
          data={pacientes}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => 
          <TouchableOpacity onPress={() => navigation.navigate("Detalhes", item)}>
            <CardConsulta {...item} />
          </TouchableOpacity>
          }
          showsVerticalScrollIndicator={false}
          />
      </>
      : 
        <>
          <InformacoesUsuarioShimmerEffect />
          <CardConsultaShimmerEffect />
          <CardConsultaShimmerEffect />
          <CardConsultaShimmerEffect />
          <CardConsultaShimmerEffect />
        </>
      }

    </View> 
    </TelaDeFundo>
  );
}