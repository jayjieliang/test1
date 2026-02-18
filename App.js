import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';

const App = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);

  const handleNumberPress = (num) => {
    if (shouldResetDisplay) {
      setDisplay(String(num));
      setShouldResetDisplay(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  const handleOperationPress = (op) => {
    const currentValue = parseFloat(display);
    
    if (previousValue === null) {
      setPreviousValue(currentValue);
    } else if (operation) {
      const result = calculate(previousValue, currentValue, operation);
      setDisplay(String(result));
      setPreviousValue(result);
    }
    
    setOperation(op);
    setShouldResetDisplay(true);
  };

  const calculate = (prev, current, op) => {
    switch (op) {
      case '+':
        return prev + current;
      case '-':
        return prev - current;
      case '×':
        return prev * current;
      case '÷':
        return current !== 0 ? prev / current : 0;
      default:
        return current;
    }
  };

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const currentValue = parseFloat(display);
      const result = calculate(previousValue, currentValue, operation);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperation(null);
      setShouldResetDisplay(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setShouldResetDisplay(false);
  };

  const handleDecimal = () => {
    if (shouldResetDisplay) {
      setDisplay('0.');
      setShouldResetDisplay(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const Button = ({ text, onPress, style, textStyle }) => (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.displayContainer}>
        <Text style={styles.displayText} numberOfLines={1} adjustsFontSizeToFit>
          {display}
        </Text>
      </View>
      
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <Button text="C" onPress={handleClear} style={styles.functionButton} />
          <Button text="÷" onPress={() => handleOperationPress('÷')} style={styles.operatorButton} />
        </View>
        
        <View style={styles.row}>
          <Button text="7" onPress={() => handleNumberPress(7)} />
          <Button text="8" onPress={() => handleNumberPress(8)} />
          <Button text="9" onPress={() => handleNumberPress(9)} />
          <Button text="×" onPress={() => handleOperationPress('×')} style={styles.operatorButton} />
        </View>
        
        <View style={styles.row}>
          <Button text="4" onPress={() => handleNumberPress(4)} />
          <Button text="5" onPress={() => handleNumberPress(5)} />
          <Button text="6" onPress={() => handleNumberPress(6)} />
          <Button text="-" onPress={() => handleOperationPress('-')} style={styles.operatorButton} />
        </View>
        
        <View style={styles.row}>
          <Button text="1" onPress={() => handleNumberPress(1)} />
          <Button text="2" onPress={() => handleNumberPress(2)} />
          <Button text="3" onPress={() => handleNumberPress(3)} />
          <Button text="+" onPress={() => handleOperationPress('+')} style={styles.operatorButton} />
        </View>
        
        <View style={styles.row}>
          <Button text="0" onPress={() => handleNumberPress(0)} style={styles.zeroButton} />
          <Button text="." onPress={handleDecimal} />
          <Button text="=" onPress={handleEquals} style={styles.equalsButton} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  displayContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  displayText: {
    fontSize: 60,
    color: '#fff',
    fontWeight: '300',
  },
  buttonsContainer: {
    flex: 3,
    padding: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 30,
    color: '#fff',
  },
  operatorButton: {
    backgroundColor: '#ff9500',
  },
  functionButton: {
    backgroundColor: '#a6a6a6',
    flex: 2,
    marginRight: 5,
  },
  zeroButton: {
    flex: 2,
    marginRight: 5,
  },
  equalsButton: {
    backgroundColor: '#ff9500',
  },
});

export default App;
