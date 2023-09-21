import React, {useMemo} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {grayColor, primaryColor, warningColor} from '../../theme/colors';
import tw from 'twrnc';
const Option = ({name, isActive}) => {
  return (
    <View style={Styles.optionWrapper}>
      <Text style={Styles.optionText}>{name}</Text>
      {isActive && (
        <Ionicons name="checkmark" color={primaryColor.primaryBase} size={20} />
      )}
    </View>
  );
};

interface Props {
  options: {label: string; value: string}[];
  onChange: ({value}) => void;
  placeholder?: string;
  label: string;
  value: any;
  error: string;
}
const DropdownMenu: React.FC<Props> = ({
  options = [],
  onChange = () => {},
  placeholder = 'Select options',
  label,
  value,
  error,
}) => {
  const selectedOption = useMemo(() => {
    return options.find(val => `${val?.value}` === `${value}`);
  }, [value, options]);
  return (
    <View style={tw`my-1`}>
      {!!label && (
        <Text style={tw`text-[${grayColor.neutral800}] text-sm mb-1`}>
          {label}
        </Text>
      )}
      <Menu
        style={tw`flex flex-row items-center border-[1px] px-3 py-3.5 ${
          error
            ? `border-[${warningColor.warning5}]`
            : `border-[${grayColor.neutral100}]`
        } rounded text-[${grayColor.neutral300}]`}>
        <MenuOptions
          customStyles={{
            optionsContainer: Styles.menuContainer,
          }}>
          <FlatList
            data={options}
            keyExtractor={data => data?.value}
            renderItem={({item: {label, value: val}}) => {
              return (
                <MenuOption onSelect={() => onChange({label, value: val})}>
                  <Option name={label} isActive={value === val} />
                </MenuOption>
              );
            }}
          />
        </MenuOptions>
        <MenuTrigger>
          <View style={Styles.menuTrigger}>
            <Text style={Styles.triggerText}>
              {selectedOption?.label || placeholder}
            </Text>
            <Ionicons
              name="chevron-down-sharp"
              color={grayColor.neutral800}
              size={15}
            />
          </View>
        </MenuTrigger>
      </Menu>
    </View>
  );
};

export default React.memo(DropdownMenu);

const Styles = StyleSheet.create({
  menuContainer: {width: '90%', maxHeight: 400},

  menuTrigger: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },

  triggerText: {
    color: grayColor.neutral800,
    fontWeight: '500',
  },
  optionWrapper: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  optionText: {
    fontWeight: '600',
    color: grayColor.neutral800,
  },
});
