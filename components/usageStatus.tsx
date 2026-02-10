import { Sparkles, Zap, AlertCircle, Infinity, Gem } from "lucide-react"

type UsageStatusProps = {
    user: any
}

export default function UsageStatus({ user, loading }: UsageStatusProps & { loading?: boolean }) {
    if (loading) {
        return (
            <div className="p-4 rounded-xl border border-border bg-card/50 animate-pulse">
                <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-muted" />
                    <div className="h-2 w-16 bg-muted rounded" />
                </div>
                <div className="flex items-baseline gap-1.5">
                    <div className="h-6 w-10 bg-muted rounded" />
                    <div className="h-2 w-8 bg-muted rounded" />
                </div>
                <div className="mt-2.5 pt-2.5 border-t border-border/10">
                    <div className="h-2 w-full bg-muted/60 rounded" />
                </div>
            </div>
        )
    }

    if (!user) return null;

    const { free_trial, user_limit, entitlement_id, entitlements } = user

    const Card = ({
        icon: Icon,
        title,
        value,
        label,
        footer,
        variant = "default"
    }: {
        icon: any,
        title: string,
        value: string | number,
        label: string,
        footer: string,
        variant?: "default" | "warning" | "success" | "info"
    }) => {
        const variants = {
            default: "border-border bg-card text-card-foreground",
            warning: "border-amber-100 bg-amber-50/80 text-amber-900",
            success: "border-emerald-100 bg-emerald-50/80 text-emerald-900",
            info: "border-blue-100 bg-blue-50/80 text-blue-900",
        }

        const iconColors = {
            default: "text-muted-foreground",
            warning: "text-amber-600",
            success: "text-emerald-600",
            info: "text-blue-600",
        }

        return (
            <div className={`p-4 rounded-xl border shadow-sm transition-all ${variants[variant]}`}>
                <div className="flex items-center gap-2 mb-2.5">
                    <Icon className={`w-3.5 h-3.5 ${iconColors[variant]}`} />
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">{title}</span>
                </div>
                <div className="flex items-baseline gap-1.5">
                    <span className="text-xl font-semibold tracking-tight">{value}</span>
                    <span className="text-[9px] uppercase tracking-widest font-bold opacity-40">{label}</span>
                </div>
                <p className="mt-2.5 pt-2.5 border-t border-current/5 text-[10px] leading-tight opacity-60">
                    {footer}
                </p>
            </div>
        )
    }

    // 1️⃣ Free trial available
    if (free_trial > 0) {
        return (
            <Card
                icon={Sparkles}
                title="Free Trial"
                value={free_trial}
                label="Left"
                footer="Complimentary generations for you."
                variant="warning"
            />
        )
    }

    // 2️⃣ Entitlement exists
    if (entitlement_id && entitlements) {
        // 2️⃣(a) Limited plan
        if (entitlements.is_limited === true) {
            return (
                <Card
                    icon={Gem}
                    title="Premium"
                    value={user_limit}
                    label="Credits"
                    footer="Active per-image credits plan."
                    variant="info"
                />
            )
        }

        // 2️⃣(b) Unlimited plan
        if (entitlements.is_limited === false) {
            return (
                <Card
                    icon={Infinity}
                    title="Pro"
                    value="∞"
                    label="Unlimited"
                    footer="Unlimited creative freedom."
                    variant="success"
                />
            )
        }
    }

    // 3️⃣ No credits
    return (
        <Card
            icon={AlertCircle}
            title="Status"
            value="0"
            label="Credits"
            footer="Upgrade to premium plan to continue designing."
            variant="default"
        />
    )
}