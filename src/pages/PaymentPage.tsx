import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { SUBSCRIPTION_PLANS } from '../constants/plans';
import { ROUTES } from '../constants/routes';
import { paymentSchema, type Payment } from '../schemas/payment';
import { updateSubscription } from '../store/authSlice';
import { formatCardNumber, formatExpiry } from '../utils/format';

const PaymentPage = () => {
  const { subId } = useParams<{ subId: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const plan = subId ? SUBSCRIPTION_PLANS.find((p) => p.id === subId) : null;

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Payment>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      cardNumber: '',
      cvc: '',
      expiry: '',
      placeholder: '',
    },
  });

  const onSubmit = (data: Payment) => {
    console.log(data);
    if (plan) {
      dispatch(updateSubscription({ subscription: plan.id }));
    }
    navigate(ROUTES.SERVICE);
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-12"
      style={{ backgroundColor: 'var(--hero-bg)' }}
    >
      <div
        className="absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container relative z-10 flex flex-col items-center">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white tracking-tight">Оплата</h1>
          <p className="mt-3 text-lg text-slate-400">Введите данные карты для оплаты подписки</p>
        </div>

        <div
          className="w-full max-w-md rounded-2xl border p-8"
          style={{
            backgroundColor: 'var(--hero-bg-soft)',
            borderColor: 'rgba(255,255,255,0.1)',
          }}
        >
          <div className="mb-6 rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-slate-400">К оплате</p>
            {plan ? (
              <>
                <p className="mt-1 text-2xl font-bold text-white">
                  {plan.price} ₽ <span className="text-sm font-normal text-slate-400">/ месяц</span>
                </p>
                <p className="mt-0.5 text-sm text-slate-400">Тариф {plan.name}</p>
              </>
            ) : (
              <>
                <p className="mt-1 text-2xl font-bold text-white">—</p>
                <p className="mt-0.5 text-sm text-slate-400">Тариф не выбран</p>
                <Link to="/pricing">Вернуться на страницу подписок</Link>
              </>
            )}
          </div>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
              <label htmlFor="cardNumber" className="text-sm font-medium text-slate-300">
                Номер карты
              </label>
              <input
                {...register('cardNumber', {
                  onChange: (e) => {
                    const formatted = formatCardNumber(e.target.value);
                    setValue('cardNumber', formatted);
                  },
                })}
                type="text"
                id="cardNumber"
                placeholder="0000 0000 0000 0000"
                maxLength={19}
                autoComplete="cc-number"
                className="rounded-xl border border-slate-500/50 bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-(--accent) focus:outline-none focus:ring-1 focus:ring-(--accent)"
              />
              {errors.cardNumber?.message && (
                <span className="text-xs text-rose-400">{errors.cardNumber.message}</span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="expiry" className="text-sm font-medium text-slate-300">
                  Срок действия
                </label>
                <input
                  {...register('expiry', {
                    onChange: (e) => {
                      const formatted = formatExpiry(e.target.value);
                      setValue('expiry', formatted);
                    },
                  })}
                  type="text"
                  id="expiry"
                  placeholder="MM/YY"
                  maxLength={5}
                  autoComplete="cc-exp"
                  className="rounded-xl border border-slate-500/50 bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-(--accent) focus:outline-none focus:ring-1 focus:ring-(--accent)"
                />
                {errors.expiry?.message && (
                  <span className="text-xs text-rose-400">{errors.expiry.message}</span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="cvc" className="text-sm font-medium text-slate-300">
                  CVC
                </label>
                <input
                  {...register('cvc')}
                  type="text"
                  id="cvc"
                  placeholder="123"
                  maxLength={4}
                  autoComplete="cc-csc"
                  inputMode="numeric"
                  className="rounded-xl border border-slate-500/50 bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-(--accent) focus:outline-none focus:ring-1 focus:ring-(--accent)"
                />
                {errors.cvc?.message && (
                  <span className="text-xs text-rose-400">{errors.cvc.message}</span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="cardholder" className="text-sm font-medium text-slate-300">
                Имя на карте
              </label>
              <input
                {...register('placeholder')}
                type="text"
                id="cardholder"
                placeholder="IVAN IVANOV"
                autoComplete="cc-name"
                className="rounded-xl border border-slate-500/50 bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-(--accent) focus:outline-none focus:ring-1 focus:ring-(--accent)"
              />
              {errors.placeholder?.message && (
                <span className="text-xs text-rose-400">{errors.placeholder.message}</span>
              )}
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-(--accent) py-3.5 font-medium text-slate-900 shadow-lg shadow-emerald-500/25 transition-colors hover:bg-(--accent-hover)"
            >
              Оплатить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
