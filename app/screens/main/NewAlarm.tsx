import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../../colors';
import {TextInputStandard} from '../../components/TextInput';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {useState} from 'react';

interface SProps {
  green?: boolean;
  pink?: boolean;
  stockName?: string;
  price?: string;
  navigation?: any;
}

const SearchRes = (props: SProps) => {
  return (
    <View style={styles.scard}>
      <View
        style={[
          styles.stock,
          props.green && styles.green,
          props.pink && styles.pink,
          {width: '33%'},
        ]}>
        <Text style={{fontSize: 24}}>{props.stockName ?? 'Name'}</Text>
        <Text style={{fontSize: 18}}>{props.price ?? '0'}</Text>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Info Button')}
        style={{
          // borderWidth: 1,
          justifyContent: 'center',
          width: '100%',
          alignItems: 'flex-end',
        }}>
        <Icon name="information-circle-outline" size={17} color={COLORS.grey} />
      </TouchableOpacity>
      <View
        style={[
          {width: '100%', marginVertical: 5},
          props.green && {alignItems: 'flex-end'},
          props.pink && {alignItems: 'flex-start'},
        ]}>
        <LinearGradient
          colors={['#08B3FC', '#FFFFFF']}
          style={styles.linearGradient}>
          <Text style={styles.gradTxt}>
            {(props.green && 'above') ?? (props.pink && 'below')} av. buying
            price
          </Text>
        </LinearGradient>
      </View>
    </View>
  );
};

export const NewAlarm = ({navigation}: any) => {
  const [search, setSearch] = useState('');
  return (
    <SafeAreaView style={styles.main}>
      <View style={{marginTop: 10, width: '90%', marginBottom: 20}}>
        <Text style={{fontSize: 24}}>Search:</Text>
        <TextInputStandard onChangeText={setSearch} />
      </View>
      {search.length > 1 && (
        <View style={{width: '90%'}}>
          <SearchRes navigation={navigation} stockName="BP" price="24" green />
          <SearchRes navigation={navigation} stockName="XL" price="18" green />
          <SearchRes
            navigation={navigation}
            stockName="WISH"
            price="23"
            green
          />
          <SearchRes navigation={navigation} stockName="PFE" price="30" pink />
        </View>
      )}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{width: '80%', position: 'absolute', bottom: 20}}>
        <Text style={{fontSize: 20}}>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  stock: {
    height: 63,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  pink: {
    backgroundColor: COLORS.pink,
  },
  green: {
    backgroundColor: COLORS.green,
  },
  scard: {
    //  borderWidth: 1,
    borderRadius: 5,
    marginVertical: 15,
  },
  linearGradient: {
    // position: 'absolute',
    //width: 193,
    height: 40,
    // left: -27,
    //top: -32.5,
    opacity: 0.2,
    borderRadius: 5,
    borderColor: '#08B3FC',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  gradTxt: {
    color: '#000000',
    backgroundColor: 'transparent',
    opacity: 1,
  },
});
