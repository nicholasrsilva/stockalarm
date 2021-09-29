import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {COLORS} from '../../colors';
import {ButtonStandard} from '../../components/Button';
import {
  Banking,
  Cannabis,
  Crypto,
  Energy,
  Food,
  Health,
  Tech,
  TopMovers,
} from '../../components/Images';
import {TextInputStandard} from '../../components/TextInput';
import {TopGradient} from '../../components/TopGradient';
import {useState} from 'react';

interface CardProps {
  image: any;
  onPress?(): void;
  title?: string;
}

const StockCard = (props: CardProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.stockCard}>
      <Text>{props.title}</Text>
      {props.image}
    </TouchableOpacity>
  );
};

export const Register = ({navigation}: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  function onRegister() {
    navigation.navigate('Alarm Type');
  }
  
  
  return (
    <SafeAreaView style={styles.main}>
      <View style={{width: '80%', flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.h2}>Sign up</Text>
      </View>
      <TopGradient />
      <ScrollView style={{width: '100%'}}>
        <View
          style={{width: '100%', alignSelf: 'center', alignItems: 'center'}}>
          <View style={[styles.col, {marginTop: '20%'}]}>
            <View style={{width: '45%'}}>
              <Text>First Name</Text>
              <TextInputStandard />
            </View>
            <View style={{width: '45%'}}>
              <Text>Last Name</Text>
              <TextInputStandard />
            </View>
          </View>
          <View style={styles.col}>
            <View style={{width: '45%'}}>
              <Text>Email</Text>
              <TextInputStandard
                autoCapitalize="none"
                value={username}
                onChangeText={setUsername}
              />
            </View>
            <View style={{width: '45%'}}>
              <Text>Phone Number</Text>
              <TextInputStandard />
            </View>
          </View>
          <View style={styles.col}>
            <View style={{width: '45%'}}>
              <Text>Birthday</Text>
              <TextInputStandard />
            </View>
            <View style={{width: '45%'}}>
              <Text>Password</Text>
              <TextInputStandard
                value={password}
                secureTextEntry
                onChangeText={setPassword}
              />
            </View>
          </View>
          <View style={{width: '80%', marginTop: '5%'}}>
            <Text style={styles.h3}>Stock Interests</Text>
          </View>
          <View style={[styles.col]}>
            <View style={{width: '45%'}}>
              <StockCard image={<TopMovers />} title="Top Movers" />
            </View>
            <View style={{width: '45%'}}>
              <StockCard image={<Crypto />} title="Crypto" />
            </View>
          </View>
          <View style={[styles.col]}>
            <View style={{width: '45%'}}>
              <StockCard image={<Cannabis />} title="Cannabis" />
            </View>
            <View style={{width: '45%'}}>
              <StockCard image={<Tech />} title="Tech" />
            </View>
          </View>
          <View style={[styles.col]}>
            <View style={{width: '45%'}}>
              <StockCard image={<Food />} title="Food" />
            </View>
            <View style={{width: '45%'}}>
              <StockCard image={<Health />} title="Health" />
            </View>
          </View>
          <View style={[styles.col]}>
            <View style={{width: '45%'}}>
              <StockCard image={<Energy />} title="Energy" />
            </View>
            <View style={{width: '45%'}}>
              <StockCard image={<Banking />} title="Banking" />
            </View>
          </View>
          <View style={{width: '80%', marginBottom: 20}}>
            <ButtonStandard onPress={onRegister} title="Register" />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{width: '80%', position: 'absolute', bottom: 20}}>
        <Text style={styles.h3}>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  h2: {
    fontSize: 36,
    letterSpacing: -1,
    lineHeight: 45,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 24,
    letterSpacing: -1,
    lineHeight: 45,
  },
  col: {
    width: '80%',
    // marginTop: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  stockCard: {
    height: 40,
    //borderWidth: 1,
    borderRadius: 5,
    backgroundColor: COLORS.blue_l,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
});
