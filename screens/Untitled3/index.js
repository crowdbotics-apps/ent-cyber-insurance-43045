import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text, View, ImageBackground } from "react-native";

const Untitled3 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "0C0D1C",
      padding: 30,
      position: "relative",
      flex: 1
    }}>
        <ImageBackground style={styles.NEucUfpp} source={{
        uri: "https://assets-global.website-files.com/5b5cd6b75bb9b0dce50e212f/5cc08480f9312f082b3bc204_brand-line.png"
      }} resizeMode="cover"></ImageBackground>
        <Text style={styles.Top}>{"Crowdbotics Cyber Insurance Platform"}</Text>
        <View style={styles.subHeader}>
          <Text style={styles.subTextHeader}>
            In today's interconnected world, businesses face unprecedented cyber
            threats that can disrupt operations, compromise sensitive data, and
            damage reputations. CyberGuard Insurance is here to empower your
            business against these evolving risks, offering comprehensive
            protection tailored to the digital landscape. Safeguard your assets,
            reputation, and peace of mind with our cutting-edge cyber insurance
            solution.
          </Text>
        </View>

        <View style={styles.grid}>
          <View style={styles.column1}>
            <Text style={styles.Gotham}>Complete Digital Protection</Text>
            <Text style={styles.subText}>
              With CyberGuard Insurance, you'll gain access to a multi-layered
              defense strategy that covers a wide spectrum of cyber risks. From
              data breaches and ransomware attacks to business interruption and
              third-party liabilities, we've got you covered.
            </Text>
            <ImageBackground style={styles.owNiYMYF} source={require("./lock_FILL0_wght400_GRAD0_opsz48.png")} resizeMode="cover"></ImageBackground>
          </View>
          <View style={styles.column2}>
            <Text style={styles.Gotham}>Tailored Coverage Plans</Text>
            <Text style={styles.subText}>
              We understand that every business is unique. Our expert
              underwriters will work closely with you to design a coverage plan
              that aligns with your specific digital assets, industry, and risk
              profile. No one-size-fits-all solutions – only precise protection
              for your needs.
            </Text>
            <ImageBackground style={styles.WtrjOULz} source={require("./browse_FILL0_wght400_GRAD0_opsz48.png")} resizeMode="cover"></ImageBackground>
          </View>
          <View style={styles.column3}>
            <Text style={styles.Gotham}>Rapid Incident Response</Text>
            <Text style={styles.subText}>
              Time is of the essence in the event of a cyber incident.
              CyberGuard Insurance provides you with 24/7 access to a team of
              experienced cyber response professionals. They will guide you
              through the steps to mitigate the damage and get your business
              back on track swiftly.
            </Text>
            <ImageBackground style={styles.cZEgMmdW} source={require("./electric_bolt_FILL0_wght400_GRAD0_opsz48.png")} resizeMode="cover"></ImageBackground>
          </View>
        </View>
        <View style={styles.IVwoskbV}>
          <Text style={styles.DlAbSArN}>Contact Sales</Text>
        </View>
        <View style={styles.topButton}>
          <Text style={styles.DlAbSArN}>Contact Sales</Text>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    backgroundColor: "#0C0D1C"
  },
  NEucUfpp: {
    width: 750,
    height: 100,
    margin: 20
  },
  subHeader: {
    width: "70%",
    margin: 10
  },
  Gotham: {
    fontFamily: "Gotham A, Gotham B, sans-serif",
    position: "relative",
    color: "#000",
    fontWeight: "bold",
    fontHeight: 32,
    lineHeight: 51,
    fontSize: 24,
    marginTop: 10,
    marginBottom: 10
  },
  Top: {
    fontFamily: "Gotham A, Gotham B, sans-serif",
    position: "relative",
    color: "#fff",
    fontWeight: "bold",
    fontHeight: 32,
    lineHeight: 51,
    fontSize: 32,
    margin: 10
  },
  grid: {
    flexDirection: "row"
  },
  column1: {
    width: "30%",
    margin: 10,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10
  },
  column2: {
    width: "30%",
    margin: 10,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10
  },
  column3: {
    width: "30%",
    margin: 10,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10
  },
  subText: {
    color: "#000",
    marginBottom: 20
  },
  subTextHeader: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 10
  },
  owNiYMYF: {
    width: 48,
    height: 62
  },
  WtrjOULz: {
    width: 48,
    height: 62
  },
  cZEgMmdW: {
    width: 48,
    height: 62
  },
  IVwoskbV: {
    height: 60,
    width: 205,
    backgroundColor: "#7924EE",
    borderRadius: 15,
    color: "#777777",
    marginTop: 15
  },
  topButton: {
    height: 60,
    width: 205,
    backgroundColor: "#7924EE",
    borderRadius: 15,
    color: "#777777",
    marginTop: 40,
    position: "absolute",
    left: 1200
  },
  DlAbSArN: {
    width: 162,
    height: 19,
    lineHeight: 14,
    fontSize: 23,
    borderRadius: 0,
    color: "#fff",
    position: "absolute",
    top: 20.5,
    left: 21.5,
    fontWeight: "700"
  }
});
export default Untitled3;