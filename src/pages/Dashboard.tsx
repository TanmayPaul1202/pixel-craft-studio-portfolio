import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, User, Mail, Calendar, LogOut, Edit2, Sparkles } from 'lucide-react';
import { ProfileEditModal } from '@/components/ProfileEditModal';

interface Profile {
  id: string;
  user_id: string;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    async function fetchProfile() {
      if (!user) return;

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (error) {
        toast({
          variant: 'destructive',
          title: 'Error fetching profile',
          description: error.message,
        });
      } else {
        setProfile(data);
      }
      setLoading(false);
    }

    fetchProfile();
  }, [user, toast]);

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error signing out',
        description: error.message,
      });
    } else {
      navigate('/');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleProfileUpdated = (updatedProfile: Profile) => {
    setProfile(updatedProfile);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <Button
            variant="outline"
            onClick={handleSignOut}
            className="border-border/50 hover:border-neon-magenta/50 hover:bg-neon-magenta/10"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto">
          {/* Welcome Card */}
          <div className="bg-card/50 backdrop-blur-xl border border-border rounded-2xl p-8 shadow-2xl mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/30">
                <Sparkles className="w-4 h-4 text-neon-blue" />
                <span className="text-sm font-medium text-neon-blue">Dashboard</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-2 font-orbitron">
              Welcome back
              {profile?.full_name && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-magenta">
                  , {profile.full_name}
                </span>
              )}
              !
            </h1>
            <p className="text-muted-foreground">
              Manage your account and view your profile information.
            </p>
          </div>

          {/* Profile Card */}
          <div className="bg-card/50 backdrop-blur-xl border border-border rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Profile Information</h2>
              <Button
                variant="outline"
                size="sm"
                className="border-neon-purple/50 hover:border-neon-purple hover:bg-neon-purple/10"
                onClick={() => setIsEditModalOpen(true)}
              >
                <Edit2 className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="w-10 h-10 border-4 border-neon-purple border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Avatar */}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-magenta p-0.5">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                      {profile?.avatar_url ? (
                        <img
                          src={profile.avatar_url}
                          alt="Avatar"
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <User className="w-8 h-8 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {profile?.full_name || 'No name set'}
                    </h3>
                    <p className="text-sm text-muted-foreground">Member</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border/50" />

                {/* Info Grid */}
                <div className="grid gap-4">
                  {/* Email */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/20 border border-border/50">
                    <div className="w-10 h-10 rounded-full bg-neon-blue/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-neon-blue" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email Address</p>
                      <p className="font-medium">{user?.email}</p>
                    </div>
                  </div>

                  {/* Full Name */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/20 border border-border/50">
                    <div className="w-10 h-10 rounded-full bg-neon-purple/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-neon-purple" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Full Name</p>
                      <p className="font-medium">{profile?.full_name || 'Not set'}</p>
                    </div>
                  </div>

                  {/* Member Since */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/20 border border-border/50">
                    <div className="w-10 h-10 rounded-full bg-neon-magenta/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-neon-magenta" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Member Since</p>
                      <p className="font-medium">
                        {user?.created_at ? formatDate(user.created_at) : 'Unknown'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Profile Edit Modal */}
      {user && (
        <ProfileEditModal
          open={isEditModalOpen}
          onOpenChange={setIsEditModalOpen}
          profile={profile}
          userId={user.id}
          onProfileUpdated={handleProfileUpdated}
        />
      )}
    </div>
  );
}
