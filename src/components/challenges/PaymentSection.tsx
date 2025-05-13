import { Payment } from '../../types/payment';

interface PaymentSectionProps {
  totalSavings: number;
  payments: Payment[];
}

export const PaymentSection = ({
  totalSavings,
  payments,
}: PaymentSectionProps) => {
  return (
    <div>
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">총 절약 금액</h3>
          <button className="text-sm bg-black text-white px-4 py-1 rounded-md">
            절약 기록하기
          </button>
        </div>
        <div className="text-green-600 text-xl font-bold">
          {totalSavings.toLocaleString()}원
        </div>
      </div>

      <div>
        {payments.map((payment) => (
          <div key={payment.id} className="bg-gray-100 p-3 rounded-md mb-2">
            <div className="flex items-center text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>₩{payment.amount.toLocaleString()}</span>
            </div>
            <div className="text-sm text-gray-500">{payment.date}</div>
            <div className="text-sm">{payment.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
