'use client'
import React from "react"
import { Plus } from "lucide-react"
import { useRouter, useParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"

import { DataTable } from "@/components/ui/data-table"
import { OrderColumn, columns } from "./columns"
import { ApiList } from "@/components/ui/api-list"




interface OrderClientProps{
    data: OrderColumn[]
}

export const OrderClient: React.FC<OrderClientProps> = ({
    data
}) => {
    const router = useRouter();
    const params = useParams()

    return(
        <>

            <Heading
                title={`Orders (${data.length})`}
                description="Manage your store order"               
            />

        <Separator/>
        <DataTable searchKey="products" columns={columns} data={data}/>
        </>
    )
}