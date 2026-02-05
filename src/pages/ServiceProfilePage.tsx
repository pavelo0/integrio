import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { logout } from '../store/authSlice';
import type { RootState } from '../store/store';

const ServiceProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);

  const handleLogout = () => {
    dispatch(logout());
    navigate(ROUTES.HOME);
  };

  const getSubscriptionLabel = (subscription: string) => {
    switch (subscription) {
      case 'none':
        return 'Free';
      case 'basic':
        return 'Basic';
      case 'pro':
        return 'Pro';
      default:
        return subscription;
    }
  };

  return (
    <div className="relative min-h-full py-8" style={{ backgroundColor: 'var(--hero-bg)' }}>
      <div
        className="absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="container relative z-10">
        <h1 className="text-4xl font-bold text-white tracking-tight">Profile</h1>
        <p className="mt-3 text-slate-400">Manage your account settings</p>

        <div
          className="mt-8 w-full max-w-2xl rounded-2xl border p-8"
          style={{
            backgroundColor: 'var(--hero-bg-soft)',
            borderColor: 'rgba(255,255,255,0.1)',
          }}
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300">Nickname</label>
              <div className="rounded-xl border border-slate-500/50 bg-white/5 px-4 py-3 text-white">
                {currentUser?.nickname || '—'}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300">Email</label>
              <div className="rounded-xl border border-slate-500/50 bg-white/5 px-4 py-3 text-white">
                {currentUser?.email || '—'}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300">Subscription</label>
              <div className="rounded-xl border border-slate-500/50 bg-white/5 px-4 py-3">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                    currentUser?.subscription === 'pro'
                      ? 'bg-(--accent) text-slate-900'
                      : currentUser?.subscription === 'basic'
                        ? 'bg-blue-500/20 text-blue-300'
                        : 'bg-slate-500/20 text-slate-300'
                  }`}
                >
                  {currentUser ? getSubscriptionLabel(currentUser.subscription) : '—'}
                </span>
              </div>
            </div>

            <div className="mt-4 pt-6 border-t border-white/10">
              <button
                onClick={handleLogout}
                className="w-full rounded-full border border-red-500/50 bg-red-500/10 px-6 py-3.5 font-medium text-red-400 transition-colors hover:bg-red-500/20 hover:border-red-500/70"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProfilePage;
