<script lang="ts">
    import { Header } from "$components";
    import "../app.css";
    import { invalidate } from "$app/navigation";
    import { setUserState } from "$components/state/user-state.svelte";

    let { data, children } = $props();
    let { session, supabase, user } = $derived(data);

    let userState = setUserState({
        session: data.session,
        supabase: data.supabase,
        user: data.user,
    });

    $effect(() => {
        userState.updateState({
            session: data.session,
            supabase: data.supabase,
            user: data.user,
        });
    });

    $effect(() => {
        const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
            if (newSession?.expires_at !== session?.expires_at) {
                invalidate("supabase:auth");
            }
        });

        return () => data.subscription.unsubscribe();
    });
</script>

<Header />
{@render children()}
