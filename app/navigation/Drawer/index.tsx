import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { Text, List, RadioButton, useTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LeftArrowIcon from 'react-native-vector-icons/Entypo';
import AppHeader from '../../components/AppHeader';
import ThemeController from '../../components/ThemeController';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import NavigationService from '../NavigationService';
import i18n from '../../config/Languages/i18n';

const Drawer: React.FC = (props) => {
    const theme = useTheme();
    const [checked, setChecked] = React.useState('first');
    const navigation = useNavigation();
    const { t } = useTranslation();

    return (
        <>
            <AppHeader
                renderLeft={
                    <View style={{ flexDirection: 'row' ,padding:10}}>

                    <LeftArrowIcon
                        name="cross"
                        style={styles.icon}
                        size={30}
                        onPress={() => navigation.navigate('Home')}
                    />
                    <View style={styles.labelWrapper} />

                    <Text style={styles.headerLabel}>{t('Library')}</Text>
                    </View>
                }
            />
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    {/* <View style={styles.userInfoSection}>
            <Avatar.Image
              source={{
                uri:
                  'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
              }}
              size={50}
            />
            <Title style={styles.title}>Dawid Urbaniak</Title>
            <Caption style={styles.caption}>@trensik</Caption>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  202
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  159
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>
          </View> */}
                    {/* <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            )}
            label={t("Profile")}
            onPress={() => {}}
          /> */}
                    <DrawerItem
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons
                                name="heart-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label={t('Liked Songs')}
                        onPress={() => {
                            NavigationService.navigate('Favorites');
                        }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons
                                name="file-multiple-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label={t('Playlist & Albums')}
                        onPress={() => {
                            NavigationService.navigate('PlaylistAndAlbums');
                        }}
                    />

                    <View style={styles.preference}>
                        <Text style={styles.text}>{t('Theme')} </Text>
                        <ThemeController />
                    </View>

                    <List.Accordion
                        title={<Text style={styles.text}>{t('Languages')} </Text>}
                        theme={{
                            colors: {
                                // text: theme.colors.background,
                                background: theme.colors.accent,
                            },
                        }}>
                        <TouchableOpacity
                            onPress={() => {
                                setChecked('first');
                                i18n.changeLanguage('en');
                            }} //Here I change the language to "en" English
                            style={styles.listbutton}>
                            <RadioButton
                                value="first"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked('first');
                                    i18n.changeLanguage('en');
                                }}
                                color="gray"
                            />
                            <Text style={styles.chekboxtext}>{t('English')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setChecked('second');
                                i18n.changeLanguage('es');
                            }} //Here I change the language to "es" Spanish
                            style={styles.listbutton}>
                            <RadioButton
                                value="second"
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked('second');
                                    i18n.changeLanguage('es');
                                }}
                                color="gray"
                            />
                            <Text style={styles.chekboxtext}>{t('Spanish')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setChecked('third');
                                i18n.changeLanguage('de');
                            }} //Here I change the language to "de" German
                            style={styles.listbutton}>
                            <RadioButton
                                value="third"
                                status={checked === 'third' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked('third');
                                    i18n.changeLanguage('de');
                                }}
                                color="gray"
                            />
                            <Text style={styles.chekboxtext}>German</Text>
                        </TouchableOpacity>
                    </List.Accordion>

                    {/* <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="logout"
                color={color}
                size={size}
              />
            )}
            label={t('Logout')}
            
            onPress={() => {onLogout}}
          /> */}
                </View>
            </DrawerContentScrollView>
        </>
    );
};

export default Drawer;
