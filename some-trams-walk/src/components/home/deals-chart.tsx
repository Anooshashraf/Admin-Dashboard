import { DollarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Text } from "../text";
import { Area, AreaConfig } from "@ant-design/plots";
import { useList } from "@refinedev/core";
import { DASHBOARD_DEALS_CHART_QUERY } from "@/graphql/queries";
import React from "react";
import { mapDealsData } from "@/utilities/helpers";
import { GetFields } from "@refinedev/nestjs-query";



const DealsChart = () => {
  const {data} = useList<GetFields>(
    {
      resource: 'dealStages',
      meta:{
        gqlQuery: DASHBOARD_DEALS_CHART_QUERY
      }
    }
  );
  const dealData = React.useMemo(() => {
    return mapDealsData(data?.data)
  },[data?.data]);

  const config: AreaConfig = {
    data: dealData,
    xField: 'timeText',
    yField: 'value'
  }
  return (
    <Card
      style={{
        height: "100%"
      }}
      headStyle={{
        padding: '8px 16px'
      }}
      bodyStyle={{
        padding: '24px 24px 0 24px'
      }}
      title={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}
        >
          <DollarOutlined/>
          <Text 
            size="sm"
            style={{
              marginLeft: "0.5rem"
            }}
          
          >
            Deals
          </Text>
        </div>
      }
    
    >
      <Area { ...config} height={325}/>
    </Card>
  )
}

export default DealsChart;