import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { ImageBackground } from "react-native";
import { FlatList } from "react-native";
import { View, Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  const navigation = useNavigation();
  const data = [{
    assessment_id: "ARNI001",
    assessment_date: "2023-08-19",
    assessor: "Alex Johnson",
    target_system: "Office A Network",
    risk_factors: [{
      factor_id: "RFNI001",
      factor_name: "Unsecured Wireless Access Points",
      description: "Open Wi-Fi networks without proper authentication",
      likelihood: "Medium",
      impact: "High",
      risk_level: "High",
      mitigation: "Implement WPA3 security protocol and strong authentication"
    }, {
      factor_id: "RFNI002",
      factor_name: "Lack of Network Segmentation",
      description: "Flat network architecture without proper segmentation",
      likelihood: "High",
      impact: "Medium",
      risk_level: "High",
      mitigation: "Segment the network into VLANs and implement firewalls"
    }],
    overall_risk_level: "High",
    recommendations: ["Secure wireless networks with strong encryption", "Implement network segmentation to limit lateral movement"]
  }, {
    assessment_id: "ARNI002",
    assessment_date: "2023-08-19",
    assessor: "Jessica Martinez",
    target_system: "Data Center Network",
    risk_factors: [{
      factor_id: "RFNI003",
      factor_name: "Unpatched Core Switches",
      description: "Critical core switches without up-to-date firmware",
      likelihood: "High",
      impact: "High",
      risk_level: "Critical",
      mitigation: "Regularly apply security patches to core switches"
    }, {
      factor_id: "RFNI004",
      factor_name: "Insufficient Network Monitoring",
      description: "Lack of real-time network monitoring and intrusion detection",
      likelihood: "Medium",
      impact: "High",
      risk_level: "High",
      mitigation: "Implement robust network monitoring and intrusion prevention systems"
    }],
    overall_risk_level: "High",
    recommendations: ["Schedule regular firmware updates for core switches", "Deploy intrusion detection systems for continuous monitoring"]
  }, {
    assessment_id: "ARNI003",
    assessment_date: "2023-08-19",
    assessor: "Daniel Clark",
    target_system: "Branch Office Network",
    risk_factors: [{
      factor_id: "RFNI005",
      factor_name: "Outdated Firewall Rules",
      description: "Obsolete firewall rules that do not align with current requirements",
      likelihood: "Medium",
      impact: "Medium",
      risk_level: "Medium",
      mitigation: "Regularly review and update firewall rules"
    }, {
      factor_id: "RFNI006",
      factor_name: "Weak Physical Security",
      description: "Lack of physical access controls for network equipment",
      likelihood: "High",
      impact: "Low",
      risk_level: "Medium",
      mitigation: "Enhance physical security measures for networking devices"
    }],
    overall_risk_level: "Medium",
    recommendations: ["Perform a firewall rule audit and cleanup", "Implement better physical access controls for networking equipment"]
  }, {
    assessment_id: "ARNI004",
    assessment_date: "2023-08-19",
    assessor: "Sophia Adams",
    target_system: "Remote Sites Network",
    risk_factors: [{
      factor_id: "RFNI007",
      factor_name: "Unencrypted Data Transmission",
      description: "Sensitive data transmitted over unencrypted channels",
      likelihood: "Medium",
      impact: "High",
      risk_level: "High",
      mitigation: "Implement VPNs or encrypted communication protocols"
    }, {
      factor_id: "RFNI008",
      factor_name: "Inadequate Remote Access Controls",
      description: "Weak authentication and authorization for remote access",
      likelihood: "High",
      impact: "Medium",
      risk_level: "High",
      mitigation: "Implement strong authentication mechanisms and access controls"
    }],
    overall_risk_level: "High",
    recommendations: ["Deploy VPN solutions for secure remote data transmission", "Enhance remote access security with multi-factor authentication"]
  }, {
    assessment_id: "ARNI005",
    assessment_date: "2023-08-19",
    assessor: "Ryan Turner",
    target_system: "Manufacturing Facility Network",
    risk_factors: [{
      factor_id: "RFNI009",
      factor_name: "Unauthenticated Device Connections",
      description: "Devices connecting to the network without proper authentication",
      likelihood: "Medium",
      impact: "High",
      risk_level: "High",
      mitigation: "Implement device authentication and network access control"
    }, {
      factor_id: "RFNI010",
      factor_name: "Lack of Network Redundancy",
      description: "Single points of failure without network redundancy",
      likelihood: "High",
      impact: "High",
      risk_level: "Critical",
      mitigation: "Implement redundant network paths and failover mechanisms"
    }],
    overall_risk_level: "Critical",
    recommendations: ["Enforce device authentication before network access", "Design and implement network redundancy for critical systems"]
  }, {
    assessment_id: "ARNI006",
    assessment_date: "2023-08-19",
    assessor: "Olivia Baker",
    target_system: "Campus Network",
    risk_factors: [{
      factor_id: "RFNI011",
      factor_name: "BYOD Security",
      description: "Unsecured personal devices accessing the network",
      likelihood: "Medium",
      impact: "Medium",
      risk_level: "Medium",
      mitigation: "Implement a separate network for guest and BYOD devices"
    }, {
      factor_id: "RFNI012",
      factor_name: "Insufficient Network Monitoring",
      description: "Limited monitoring of network traffic and activities",
      likelihood: "Medium",
      impact: "High",
      risk_level: "High",
      mitigation: "Deploy network monitoring tools for better visibility"
    }],
    overall_risk_level: "High",
    recommendations: ["Implement a segmented network for guest and personal devices", "Enhance network monitoring capabilities to detect anomalies"]
  }, {
    assessment_id: "ARNI007",
    assessment_date: "2023-08-19",
    assessor: "Liam Parker",
    target_system: "Financial Institution Network",
    risk_factors: [{
      factor_id: "RFNI013",
      factor_name: "Unencrypted Data Transfer",
      description: "Sensitive financial data transferred without encryption",
      likelihood: "Medium",
      impact: "High",
      risk_level: "High",
      mitigation: "Enable SSL/TLS for all data transfers"
    }, {
      factor_id: "RFNI014",
      factor_name: "Insider Threats",
      description: "Unauthorized access by internal personnel",
      likelihood: "Medium",
      impact: "High",
      risk_level: "High",
      mitigation: "Implement strict access controls and user monitoring"
    }],
    overall_risk_level: "High",
    recommendations: ["Encrypt all financial data transfers using SSL/TLS", "Implement user behavior monitoring for early detection of insider threats"]
  }, {
    assessment_id: "ARNI008",
    assessment_date: "2023-08-19",
    assessor: "Mia Turner",
    target_system: "Healthcare Facility Network",
    risk_factors: [{
      factor_id: "RFNI015",
      factor_name: "Medical Device Security",
      description: "Insecurely configured medical devices connected to the network",
      likelihood: "High",
      impact: "High",
      risk_level: "Critical",
      mitigation: "Apply security patches and segment medical devices"
    }, {
      factor_id: "RFNI016",
      factor_name: "Sensitive Data Exposure",
      description: "Potential exposure of patient health records",
      likelihood: "Medium",
      impact: "High",
      risk_level: "High",
      mitigation: "Implement strict access controls and data encryption"
    }],
    overall_risk_level: "High",
    recommendations: ["Regularly update and secure medical device configurations", "Implement encryption for all patient health records"]
  }, {
    assessment_id: "ARNI009",
    assessment_date: "2023-08-19",
    assessor: "Noah Adams",
    target_system: "Research Lab Network",
    risk_factors: [{
      factor_id: "RFNI017",
      factor_name: "Uncontrolled IoT Devices",
      description: "Unmanaged and potentially vulnerable IoT devices",
      likelihood: "High",
      impact: "Medium",
      risk_level: "High",
      mitigation: "Implement network segmentation and IoT device monitoring"
    }, {
      factor_id: "RFNI018",
      factor_name: "Data Breach Impact",
      description: "Potential loss of proprietary research data",
      likelihood: "Medium",
      impact: "High",
      risk_level: "High",
      mitigation: "Enhance data access controls and encryption"
    }],
    overall_risk_level: "High",
    recommendations: ["Isolate IoT devices from critical research networks", "Implement advanced data access controls and encryption"]
  }, {
    assessment_id: "ARNI010",
    assessment_date: "2023-08-19",
    assessor: "Ella Martin",
    target_system: "Government Agency Network",
    risk_factors: [{
      factor_id: "RFNI019",
      factor_name: "Nation-State Cyber Threats",
      description: "Potential targeted cyber attacks from nation-state actors",
      likelihood: "High",
      impact: "Critical",
      risk_level: "Critical",
      mitigation: "Implement advanced threat detection and incident response"
    }, {
      factor_id: "RFNI020",
      factor_name: "Insufficient Network Resilience",
      description: "Lack of redundancy and disaster recovery mechanisms",
      likelihood: "High",
      impact: "High",
      risk_level: "High",
      mitigation: "Enhance network resilience and disaster recovery plans"
    }],
    overall_risk_level: "Critical",
    recommendations: ["Implement specialized threat detection mechanisms for advanced threats", "Develop and test comprehensive disaster recovery strategies"]
  }];
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#0C0D1C",
      padding: 30,
      position: "relative",
      flex: 1
    }}>
        <ImageBackground style={styles.NEucUfpp} source={{
        uri: "https://assets-global.website-files.com/5b5cd6b75bb9b0dce50e212f/5cc08480f9312f082b3bc204_brand-line.png"
      }} resizeMode="cover"></ImageBackground>
        <Text style={styles.Gotham}>
          {"Crowdbotics Cyber Insurance Platform"}
        </Text>
        <View style={styles.wrapper}>
          <View style={styles.col1}>
            <View style={styles.head}>
              <Text style={styles.boxSmallHead}>Overall Risk</Text>
              <Text style={styles.boxLargeHead}>Target System</Text>
              <Text style={styles.boxExLargeHead}>Recommendations</Text>
            </View>
            <FlatList style={styles.flatlist} renderItem={({
            item
          }) => <View style={styles.MiTiIqyA}>
                  <Text style={styles.boxSmall}>
                    {item?.overall_risk_level}
                  </Text>
                  <Text style={styles.boxLarge}>{item?.target_system}</Text>
                  <Text style={styles.boxExLarge}>{item?.recommendations}</Text>
                </View>} ItemSeparatorComponent={() => <View style={styles.dKdXMTlJ} />} data={data} keyExtractor={(item, index) => index}></FlatList>
          </View>
          <View style={styles.col2}></View>
        </View>
        <View style={styles.rightHand}>
          <Pressable onPress={() => {
          navigation.navigate("Untitled3", {});
        }}>
            <Text style={styles.kjCnRHKk}>Get Insured</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    backgroundColor: "#0C0D1C",
    color: "#fff"
  },
  head: {
    flexDirection: "row",
    marginTop: 10
  },
  wrapper: {
    flex: 1
  },
  col1: {
    width: "900px"
  },
  col2: {
    width: "400px",
    position: "absolute",
    marginRight: 0
  },
  Gotham: {
    fontFamily: "Gotham A, Gotham B, sans-serif",
    position: "relative",
    color: "#fff",
    fontHeight: 32,
    lineHeight: 51,
    fontSize: 34,
    marginTop: 10,
    marginBottom: 10
  },
  boxSmall: {
    fontFamily: "Gotham A, Gotham B, sans-serif",
    position: "relative",
    color: "#fff",
    width: "190px"
  },
  boxSmallHead: {
    fontFamily: "Gotham A, Gotham B, sans-serif",
    fontWeight: "bold",
    position: "relative",
    color: "#fff",
    width: "190px"
  },
  boxLarge: {
    fontFamily: "Gotham A, Gotham B, sans-serif",
    position: "relative",
    color: "#fff",
    width: "400px"
  },
  boxLargeHead: {
    fontFamily: "Gotham A, Gotham B, sans-serif",
    fontWeight: "bold",
    position: "relative",
    color: "#fff",
    width: "400px"
  },
  boxExLarge: {
    fontFamily: "Gotham A, Gotham B, sans-serif",
    position: "relative",
    color: "#fff",
    width: "450px"
  },
  boxExLargeHead: {
    fontFamily: "Gotham A, Gotham B, sans-serif",
    fontWeight: "bold",
    position: "relative",
    color: "#fff",
    width: "450px",
    lineHeight: 14
  },
  flatlist: {
    height: 700,
    backgroundColor: "#0C0D1C"
  },
  MiTiIqyA: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#0C0D1C",
    color: "#FFF",
    position: "relative",
    padding: 10
  },
  dKdXMTlJ: {
    backgroundColor: "#fff",
    height: 1
  },
  NEucUfpp: {
    width: 742,
    height: 100
  },
  rightHand: {
    borderRadius: 15,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
    position: "absolute",
    padding: 20,
    top: 50,
    left: 1100
  },
  kjCnRHKk: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 32
  }
});
export default Untitled2;