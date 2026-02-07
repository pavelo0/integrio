import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { registerSchema, type Register } from '../schemas/auth';
import { register as registerAction } from '../store/authSlice';
import type { RootState } from '../store/store';

const RegisterPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState<boolean>(false);
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const { register, handleSubmit, formState, setError } = useForm<Register>({
    resolver: zodResolver(registerSchema),
    mode: 'onSubmit',
    defaultValues: {
      nickname: '',
      email: '',
      password: '',
      confirmPassword: '',
      policyAgreement: false,
      rememberMe: false,
    },
  });

  const handlePasswordIsVisible = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const handleConfirmPasswordIsVisible = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handleFormSubmit = (data: Register) => {
    const existingUser = auth.users.some((user) => user.email === data.email);
    if (existingUser) {
      setError('email', {
        type: 'manual',
        message: 'Пользователь с такой почтой уже существует',
      });
      return;
    }

    dispatch(registerAction(data));
    navigate(ROUTES.PRICING);
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-10"
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
        <div
          className="w-full max-w-md rounded-2xl border p-8"
          style={{
            backgroundColor: 'var(--hero-bg-soft)',
            borderColor: 'rgba(255,255,255,0.1)',
          }}
        >
          <p className="text-center text-sm font-medium text-(--accent) tracking-wide">Integrio</p>
          <h1 className="mt-2 text-center text-2xl font-bold text-white tracking-tight">
            Регистрация
          </h1>
          <p className="mt-1 text-center text-slate-400">Создайте аккаунт в Integrio</p>

          <form
            className="mt-8 flex flex-col gap-5"
            onSubmit={handleSubmit((data) => handleFormSubmit(data))}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="nickname" className="text-sm font-medium text-slate-300">
                Никнейм
              </label>
              <input
                type="text"
                id="nickname"
                {...register('nickname')}
                placeholder="Как к вам обращаться"
                autoComplete="name"
                className="rounded-xl border border-slate-500/50 bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-(--accent) focus:outline-none focus:ring-1 focus:ring-(--accent)"
              />
              {formState.errors?.nickname && (
                <span role="alert" className="mt-0.5 min-h-5 text-xs text-rose-400">
                  {formState.errors.nickname.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-300">
                Почта
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                placeholder="example@email.ru"
                autoComplete="email"
                className="rounded-xl border border-slate-500/50 bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-(--accent) focus:outline-none focus:ring-1 focus:ring-(--accent)"
              />
              {formState.errors?.email && (
                <span role="alert" className="mt-0.5 min-h-5 text-xs text-rose-400">
                  {formState.errors.email.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm font-medium text-slate-300">
                Пароль
              </label>
              <div className="relative">
                <input
                  type={isPasswordVisible ? 'text' : 'password'}
                  id="password"
                  {...register('password')}
                  placeholder="Введите пароль"
                  autoComplete="new-password"
                  className="w-full rounded-xl border border-slate-500/50 bg-white/5 px-4 py-3 pr-12 text-white placeholder-slate-500 transition-colors focus:border-(--accent) focus:outline-none focus:ring-1 focus:ring-(--accent)"
                />
                <button
                  type="button"
                  onClick={handlePasswordIsVisible}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-slate-400 transition-colors hover:text-white"
                  aria-label={isPasswordVisible ? 'Скрыть пароль' : 'Показать пароль'}
                >
                  {isPasswordVisible ? (
                    <EyeOff className="w-5 h-5" strokeWidth={2} aria-hidden />
                  ) : (
                    <Eye className="w-5 h-5" strokeWidth={2} aria-hidden />
                  )}
                </button>
              </div>
              {formState.errors?.password && (
                <span role="alert" className="mt-0.5 min-h-5 text-xs text-rose-400">
                  {formState.errors.password.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="confirm-password" className="text-sm font-medium text-slate-300">
                Подтвердите пароль
              </label>
              <div className="relative">
                <input
                  type={isConfirmPasswordVisible ? 'text' : 'password'}
                  id="confirm-password"
                  {...register('confirmPassword')}
                  placeholder="Подтвердите пароль"
                  autoComplete="new-password"
                  className="w-full rounded-xl border border-slate-500/50 bg-white/5 px-4 py-3 pr-12 text-white placeholder-slate-500 transition-colors focus:border-(--accent) focus:outline-none focus:ring-1 focus:ring-(--accent)"
                />
                <button
                  type="button"
                  onClick={handleConfirmPasswordIsVisible}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-slate-400 transition-colors hover:text-white"
                  aria-label={isConfirmPasswordVisible ? 'Скрыть пароль' : 'Показать пароль'}
                >
                  {isConfirmPasswordVisible ? (
                    <EyeOff className="w-5 h-5" strokeWidth={2} aria-hidden />
                  ) : (
                    <Eye className="w-5 h-5" strokeWidth={2} aria-hidden />
                  )}
                </button>
              </div>
              {formState.errors?.confirmPassword && (
                <span role="alert" className="mt-0.5 min-h-5 text-xs text-rose-400">
                  {formState.errors.confirmPassword.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  {...register('policyAgreement')}
                  id="terms"
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-500 bg-white/5 text-(--accent) focus:ring-(--accent) focus:ring-offset-0"
                />
                <label htmlFor="terms" className="text-sm text-slate-400">
                  Согласен с условиями использования
                </label>
              </div>
              {formState.errors?.policyAgreement && (
                <span role="alert" className="min-h-5 text-xs text-rose-400">
                  {formState.errors.policyAgreement.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-(--accent) py-3.5 font-medium text-slate-900 shadow-lg shadow-emerald-500/25 transition-colors hover:bg-(--accent-hover)"
            >
              Зарегистрироваться
            </button>

            <p className="mt-6 text-center text-sm text-slate-400">
              Уже есть аккаунт?{' '}
              <Link
                to="/login"
                className="font-medium text-(--accent) transition-colors hover:text-(--accent-hover)"
              >
                Войти
              </Link>
            </p>
          </form>

          <details className="mt-6 rounded-lg border border-white/10 bg-white/5 p-3">
            <summary className="cursor-pointer text-xs text-slate-500">
              Стор auth (для отладки)
            </summary>
            <pre className="mt-2 overflow-auto text-xs text-slate-400">
              {JSON.stringify(auth, null, 2)}
            </pre>
          </details>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
