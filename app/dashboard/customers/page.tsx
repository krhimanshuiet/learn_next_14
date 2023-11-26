import { fetchCustomers, fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table'
import { InvoicesTableSkeleton, TableRowSkeleton } from '@/app/ui/skeletons';
import React, { Suspense } from 'react'

type Props = {
  searchParams:{query:string,page:string}
}

const CustomerPage = async ({searchParams:{query}}:{searchParams:{query:string}}) => {
  const customers = await fetchFilteredCustomers(query || '');
  return (
    <Suspense fallback={<InvoicesTableSkeleton/>}>
      <CustomersTable customers={customers} />
    </Suspense>
  )
}

export default CustomerPage