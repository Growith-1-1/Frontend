import { cn } from '@/lib/utils';
import { AccountBookItem, Transaction } from '@/types/transactions';
import { Minus, Plus } from 'lucide-react';
import Link from 'next/link';

export default function TransactionsLogCard({
  data,
}: {
  data: AccountBookItem | Transaction;
}) {
  const { id, type, title, occurredAt, memo, amount } = data;
  return (
    <Link
      href={`/transactions/update/${type.toLocaleLowerCase()}?id=${id}`}
      className="border w-full border-gray-300 rounded-md p-4 flex items-center justify-between gap-6"
    >
      <div className="flex gap-2 items-center flex-1 overflow-hidden">
        <div
          className={cn(
            'rounded-full w-9 h-9 flex items-center justify-center shrink-0',
            {
              'bg-warning/20': type === 'SPEND',
              'bg-primary/20': type === 'INCOME',
            }
          )}
        >
          {type === 'SPEND' ? (
            <Minus className="text-warning" />
          ) : (
            <Plus className="text-primary" />
          )}
        </div>
        <div className="flex flex-col gap-1 overflow-hidden">
          <span className="title4">{title}</span>
          <span className="body3 text-gray-500 truncate">
            {occurredAt} {memo ? ' | ' + memo : ''}
          </span>
        </div>
      </div>
      <div
        className={cn(' title4 w-fit', {
          'text-warning': type === 'SPEND',
          'text-primary': type === 'INCOME',
        })}
      >
        {amount.toLocaleString()}
      </div>
    </Link>
  );
}
