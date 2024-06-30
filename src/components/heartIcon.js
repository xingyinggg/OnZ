import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeartIcon = () => {
  const [filled, setFilled] = useState(false);

  const toggleHeart = () => {
    setFilled(!filled);
  };

  return (
    <TouchableOpacity onPress={toggleHeart}>
      <Icon 
        name={filled ? "heart" : "heart-o"} 
        size={30} 
        color={filled ? "red" : "white"} 
      />
    </TouchableOpacity>
  );
};

export default HeartIcon;