import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginSchema, type Login } from '../schemas/auth';
import { login } from '../store/authSlice';
import type { RootState } from '../store/store';

const LoginPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  const handleIsPasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const { register, handleSubmit, formState, setError } = useForm<Login>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const handleFormSubmit = (data: Login) => {
    const user = auth.users.find((user) => user.email === data.email);

    if (!user) {
      setError('email', {
        type: 'manual',
        message: 'Пользователя с такой почтой не существует',
      });
      return;
    }

    if (user.password !== data.password) {
      setError('password', {
        type: 'manual',
        message: 'Неверный пароль',
      });
      return;
    }

    dispatch(login(data));
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
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
          <h1 className="mt-2 text-center text-2xl font-bold text-white tracking-tight">Вход</h1>
          <p className="mt-1 text-center text-slate-400">Войдите в свой аккаунт</p>

          <form
            className="mt-8 flex flex-col gap-5"
            onSubmit={handleSubmit((data) => handleFormSubmit(data))}
          >
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
                  autoComplete="current-password"
                  className="w-full rounded-xl border border-slate-500/50 bg-white/5 px-4 py-3 pr-12 text-white placeholder-slate-500 transition-colors focus:border-(--accent) focus:outline-none focus:ring-1 focus:ring-(--accent)"
                />
                <button
                  type="button"
                  onClick={handleIsPasswordVisible}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-slate-400 transition-colors hover:text-white"
                  aria-label="Показать пароль"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
              {formState.errors?.password && (
                <span role="alert" className="mt-0.5 min-h-5 text-xs text-rose-400">
                  {formState.errors.password.message}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register('rememberMe')}
                id="remember"
                className="h-4 w-4 rounded border-slate-500 bg-white/5 text-(--accent) focus:ring-(--accent) focus:ring-offset-0"
              />
              <label htmlFor="remember" className="text-sm text-slate-400">
                Запомнить меня
              </label>
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-(--accent) py-3.5 font-medium text-slate-900 shadow-lg shadow-emerald-500/25 transition-colors hover:bg-(--accent-hover)"
            >
              Войти
            </button>

            <p className="mt-6 text-center text-sm text-slate-400">
              Ещё нет аккаунта?{' '}
              <Link
                to="/register"
                className="font-medium text-(--accent) transition-colors hover:text-(--accent-hover)"
              >
                Зарегистрироваться
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

export default LoginPage;
