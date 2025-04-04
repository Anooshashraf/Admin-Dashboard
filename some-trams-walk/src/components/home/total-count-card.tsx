import { totalCountVariants } from '@/constants'
import { Card, Skeleton } from 'antd'
import React from 'react'
import { Text } from '../text'
import { T } from 'react-router/dist/development/fog-of-war-CGNKxM4z'
import { Area } from '@ant-design/plots'


type Props = {
    resource: "companies" | "contacts" | "deals",
    isLoading: Boolean,
    totalCount: number
}
const DashboardTotalCountCard = ({
    resource,
    isLoading,
    totalCount
}: Props) => {
    const {primaryColor ,secondaryColor,icon, title} = totalCountVariants[resource];
    const config: AreaConfig = {
        data: totalCountVariants[resource].data,
        xField: 'index',
        yField: 'value',
    }
    return (
        <Card
            style={{
                height: "96px",
                padding: 0
            }}
            bodyStyle={{
                padding: ' 8px 8px 8px 12px'
            }}
            size='small'
        >
            <div
                style={{
                    display:"flex",
                    alignItems: 'center',
                    gap: '8px',
                    whiteSpace: 'nowrap'
                }}
            >
                {icon}
                <Text
                    size="md"
                    className="secondary"
                    style={{
                        marginLeft: "6px"
                    }}
                
                >
                    {title}
                </Text>
            </div>
            <div
                style={{
                    display:'flex',
                    justifyContent:"space-between",
                }}
            >
                <Text
                    size='xxxl'
                    strong
                    style={{
                        flex:1,
                        whiteSpace: 'nowrap',
                        flexShrink:0,
                        textAlign: 'start',
                        marginLeft: '48px',
                        fontVariantNumeric:'tabular-nums',
                    }}

                >
                    {isLoading ? (
                        <Skeleton.Button
                            style={{
                                marginTop: '8px',
                                width: '74px'
                            }}
                        />
                    ) : (
                        totalCount
                    )}
                </Text>
                <Area {...config}
                    style={{
                        width:'50%'
                    }}
                />
            </div>
        </Card>
    )
}


export default DashboardTotalCountCard