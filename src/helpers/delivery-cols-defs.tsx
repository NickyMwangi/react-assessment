import { createColumnHelper } from '@tanstack/react-table';
import moment from 'moment';
import { TableActions } from './table-actions';
import { TableEarlyLate } from './earl-late-col';

const columnHelper = createColumnHelper<any>();

export const DeliveryColumnsDef = () => [
  {
    accessorKey: 'store.store_name',
    header: 'Store'
  },
  {
    accessorKey: 'staff.first_name',
    header: 'Staff'
  },
  {
    accessorKey: 'customer.first_name',
    header: 'Customer'
  },
  {
    accessorKey: 'delivery',
    header: 'Delivery',
    cell: TableEarlyLate
  },
  {
    accessorKey: 'order_date',
    header: 'Order Date',
    cell: (props: any) => <p>{moment(props.getValue()).format('DD MMMM YYYY HH:mm')}</p>
  },
  {
    accessorKey: 'required_date',
    header: 'Required Date',
    cell: (props: any) => <p>{moment(props.getValue()).format('DD MMMM YYYY HH:mm')}</p>
  },
  {
    accessorKey: 'shipped_date',
    header: 'Shipped Date',
    cell: (props: any) => <p>{moment(props.getValue()).format('DD MMMM YYYY HH:mm')}</p>
  },
  columnHelper.display({
    id: 'actions',
    cell: TableActions
  })
];
