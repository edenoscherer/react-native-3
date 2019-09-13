import React, { Component } from "react";
import moment from "moment";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableHighlight,
  Modal
} from "react-native";

import AccelerationItem from "../components/AccelerationItem";

const accelerations = [
  {
    slug: "reactnative-online-1",
    name: "React Native",
    is_disabled: false,
    subscription_start_at: "2019-07-08T00:00:00-03:00",
    subscription_finish_at: "2019-07-28T23:59:59-03:00",
    start_at: "2019-08-17T00:00:00-03:00",
    finish_at: "2019-11-03T00:00:00-03:00",
    location: "Online",
    banner_url:
      "https://s3-us-west-1.amazonaws.com/acceleration-assets-highway/reactnative-online-1/banner.jpg",
    home_banner_url: "",
    color_scheme: "7800FF",
    company_count: 1
  },
  {
    slug: "adxp-datascience-joinville-1",
    name: "ADxp Data Science",
    is_disabled: false,
    subscription_start_at: "2019-07-09T00:00:00-03:00",
    subscription_finish_at: "2019-08-19T00:00:00-03:00",
    start_at: "2019-08-19T00:00:00-03:00",
    finish_at: "2019-10-23T23:59:59-03:00",
    location: "DevHub Joinville, SC",
    banner_url: "",
    home_banner_url: "",
    color_scheme: "",
    company_count: 1
  },
  {
    slug: "adxp-datascience-joinville-2",
    name: "ADxp Data Science",
    is_disabled: false,
    subscription_start_at: "2019-07-09T00:00:00-03:00",
    subscription_finish_at: "2019-08-20T00:00:00-03:00",
    start_at: "2019-08-20T00:00:00-03:00",
    finish_at: "2019-10-24T23:59:59-03:00",
    location: "DevHub Joinville, SC",
    banner_url: "",
    home_banner_url: "",
    color_scheme: "",
    company_count: 1
  },
  {
    slug: "adxp-datascience-sp-1",
    name: "ADxp Data Science",
    is_disabled: false,
    subscription_start_at: "2019-07-09T00:00:00-03:00",
    subscription_finish_at: "2019-09-23T00:00:00-03:00",
    start_at: "2019-09-23T00:00:00-03:00",
    finish_at: "2019-11-27T23:59:59-03:00",
    location: "a confirmar",
    banner_url: "",
    home_banner_url: "",
    color_scheme: "",
    company_count: 1
  },
  {
    slug: "adxp-datascience-sp-2",
    name: "ADxp Data Science",
    is_disabled: false,
    subscription_start_at: "2019-07-09T00:00:00-03:00",
    subscription_finish_at: "2019-09-24T00:00:00-03:00",
    start_at: "2019-09-24T00:00:00-03:00",
    finish_at: "2019-11-28T23:59:59-03:00",
    location: "a confirmar",
    banner_url: "",
    home_banner_url: "",
    color_scheme: "",
    company_count: 1
  },
  {
    slug: "python-online-1",
    name: "Python Women",
    is_disabled: false,
    subscription_start_at: "2019-07-22T00:00:00-03:00",
    subscription_finish_at: "2019-08-11T23:59:59-03:00",
    start_at: "2019-08-24T00:00:00-03:00",
    finish_at: "2019-11-02T23:59:59-03:00",
    location: "Online",
    banner_url:
      "https://s3-us-west-1.amazonaws.com/acceleration-assets-highway/python-online-1/banner.jpg",
    home_banner_url: "",
    color_scheme: "212133",
    company_count: 1
  }
];

export default class Acceleration extends Component {
  state = {
    modalVisible: false,
    modalItem: null
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  setModalItem(modalItem) {
    this.setState({ modalItem: modalItem });
  }

  openModal(item) {
    this.setModalItem(item);
    this.setModalVisible(true);
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.headerImage}
            source={{
              uri:
                "https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png"
            }}
          />
          <TouchableHighlight
            onPress={() => navigation.navigate("Profile")}
            className="user-image-btn"
          >
            <Image
              style={styles.headerImageUser}
              source={{
                uri:
                  "https://secure.gravatar.com/avatar/f50a9db56e231198af3507f10b5d5491?d=mm"
              }}
            />
          </TouchableHighlight>
        </View>
        <Text style={styles.title}>Acelerações</Text>
        <FlatList
          data={accelerations}
          keyExtractor={item => item.slug}
          renderItem={({ item, index }) => (
            <TouchableHighlight
              onPress={() => this.openModal(item)}
              className="acceleration-item-btn"
            >
              <AccelerationItem item={item} />
            </TouchableHighlight>
          )}
        />
        <Modal
          className="modal"
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
          }}
        >
          {this.modal()}
        </Modal>
      </View>
    );
  }

  modal() {
    const item = this.state.modalItem;
    if (!item) {
      return <View />;
    }
    const img = item.banner_url
      ? item.banner_url
      : "http://denrakaev.com/wp-content/uploads/2015/03/no-image.png";

    return (
      <View style={styles.modalContent}>
        <Image style={styles.modalImage} source={{ uri: img }} />
        <View style={styles.itemContent}>
          <Text style={styles.modalTitle}>{item.name}</Text>
          <Text style={styles.modalText}>{item.location}</Text>
          <Text style={styles.modalText}>
            Inscrições + desafio enviado até{" "}
            {moment(item.subscription_finish_at).format("DD/MM/YYYY")}
          </Text>
          <TouchableHighlight
            className="close-modal-btn"
            onPress={() => {
              this.setModalVisible(false);
            }}
          >
            <Text style={styles.modalButton}>Fechar</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

Acceleration.navigationOptions = {
  title: "Acceleration"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    borderBottomColor: "#7800ff",
    borderBottomWidth: 2,
    padding: 16,
    paddingTop: 55
  },
  headerImage: {
    height: 45,
    width: 250
  },
  headerImageUser: {
    height: 50,
    width: 50,
    borderRadius: 100,
    alignContent: "flex-end"
  },
  title: {
    color: "#7800ff",
    fontSize: 30,
    padding: 16
  },
  modalContent: {
    padding: 10
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center"
  },
  itemContent: {
    padding: 10
  },
  modalImage: {
    width: "100%",
    height: 250,
    padding: 10
  },
  modalTitle: {
    color: "#7800ff",
    fontSize: 16
  },
  modalText: {},
  modalButton: {
    color: "#000",
    backgroundColor: "#fff",
    borderColor: "#7800ff",
    textAlign: "center",
    borderWidth: 1,
    padding: 10,
    marginTop: 10
  }
});
