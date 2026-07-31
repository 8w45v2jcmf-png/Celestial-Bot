import { logger } from '../utils/logger.js';

// ==============================================
//  🖤💜  BOT CONFIG — BLACK & PURPLE THEME
// ==============================================
const THEME = {
    // PRIMARY PALETTE — BLACK & PURPLE
    BLACK: "#0C0C0F",
    DARK: "#121217",
    DARKER: "#08080A",
    PANEL: "#1A1A24",
    CARD: "#21212E",
    INPUT: "#2B2B3B",
    BORDER: "#383850",
    DIVIDER: "#454563",

    PURPLE: {
        BRIGHT: "#9D4EDD",
        PRIMARY: "#7B2CBF",
        MEDIUM: "#6B21A8",
        DARK: "#5B21B6",
        DEEPER: "#4C1D95",
        MUTED: "#6366F1",
        GLOW: "#A855F7",
        FAINT: "#C084FC",
        FADE: "#E9D5FF",
    },

    NEUTRAL: {
        WHITE: "#F8Fafc",
        LIGHT: "#E4E4E7",
        GRAY: "#A1A1AA",
        DIM: "#71717A",
        FAINT: "#3F3F46",
    },

    STATUS: {
        SUCCESS: "#10B981",
        WARNING: "#F59E0B",
        ERROR: "#EF4444",
        INFO: "#818CF8",
    },
};

export const botConfig = {
    // ==========================================
    //  BOT PRESENCE
    // ==========================================
    presence: {
        status: "online",
        activities: [{ name: "Dark Mode", state: "💜 Purple & Black", type: 4 }],
    },

    // ==========================================
    //  COMMANDS
    // ==========================================
    commands: {
        owners: process.env.OWNER_IDS?.split(",").map(id => id.trim()).filter(Boolean) || [],
        defaultCooldown: 3,
        deleteCommands: false,
        testGuildId: process.env.TEST_GUILD_ID,
        maintenanceMode: process.env.MAINTENANCE_MODE === "true",
        prefix: process.env.PREFIX || "!",
    },

    // ==========================================
    //  APPLICATIONS
    // ==========================================
    applications: {
        defaultQuestions: [
            { question: "What is your name?", required: true },
            { question: "How old are you?", required: true },
            { question: "Why do you want to join?", required: true },
        ],
        statusColors: {
            pending: THEME.STATUS.WARNING,
            approved: THEME.STATUS.SUCCESS,
            denied: THEME.STATUS.ERROR,
        },
        applicationCooldown: 24,
        deleteDeniedAfter: 7,
        deleteApprovedAfter: 30,
        managerRoles: [],
    },

    // ==========================================
    //  🖤💜 EMBED COLORS — FULL BLACK & PURPLE
    // ==========================================
    embeds: {
        colors: {
            primary: THEME.PURPLE.PRIMARY,
            secondary: THEME.DARK,

            success: THEME.STATUS.SUCCESS,
            error: THEME.STATUS.ERROR,
            warning: THEME.STATUS.WARNING,
            info: THEME.STATUS.INFO,

            light: THEME.NEUTRAL.WHITE,
            dark: THEME.BLACK,
            gray: THEME.NEUTRAL.GRAY,

            blurple: THEME.PURPLE.BRIGHT,
            purple: THEME.PURPLE.PRIMARY,
            purpleBright: THEME.PURPLE.BRIGHT,
            purpleDark: THEME.PURPLE.DARK,
            green: THEME.STATUS.SUCCESS,
            yellow: THEME.STATUS.WARNING,
            fuchsia: THEME.PURPLE.GLOW,
            red: THEME.STATUS.ERROR,
            black: THEME.BLACK,

            giveaway: { active: THEME.PURPLE.PRIMARY, ended: THEME.STATUS.ERROR },
            ticket: { open: THEME.PURPLE.PRIMARY, claimed: THEME.STATUS.WARNING, closed: THEME.STATUS.ERROR, pending: THEME.NEUTRAL.DIM },
            economy: THEME.PURPLE.FAINT,
            birthday: THEME.PURPLE.GLOW,
            moderation: THEME.PURPLE.DARK,

            priority: {
                none: THEME.NEUTRAL.DIM,
                low: THEME.PURPLE.MUTED,
                medium: THEME.PURPLE.PRIMARY,
                high: THEME.PURPLE.DARK,
                urgent: THEME.STATUS.ERROR,
            },
        },
        footer: { text: "Titan Bot", icon: null },
        thumbnail: null,
        author: { name: null, icon: null, url: null },
    },

    // ==========================================
    //  ECONOMY
    // ==========================================
    economy: {
        currency: { name: "coins", namePlural: "coins", symbol: "$" },
        startingBalance: 0,
        baseBankCapacity: 100000,
        dailyAmount: 100,
        workMin: 10, workMax: 100,
        begMin: 5, begMax: 50,
        cooldowns: { daily: 86400000, work: 3600000, crime: 7200000, rob: 14400000 },
        robSuccessRate: 0.4,
        robFailJailTime: 3600000,
    },

    shop: {},

    // ==========================================
    //  TICKETS
    // ==========================================
    tickets: {
        defaultCategory: null,
        supportRoles: [],
        priorities: {
            none: { emoji: "⚪", color: THEME.NEUTRAL.DIM, label: "None" },
            low: { emoji: "🟣", color: THEME.PURPLE.MUTED, label: "Low" },
            medium: { emoji: "💜", color: THEME.PURPLE.PRIMARY, label: "Medium" },
            high: { emoji: "🔮", color: THEME.PURPLE.DARK, label: "High" },
            urgent: { emoji: "🚨", color: THEME.STATUS.ERROR, label: "Urgent" },
        },
        defaultPriority: "none",
        archiveCategory: null,
        logChannel: null,
    },

    // ==========================================
    //  GIVEAWAYS
    // ==========================================
    giveaways: {
        defaultDuration: 86400000,
        minimumWinners: 1, maximumWinners: 10,
        minimumDuration: 300000, maximumDuration: 2592000000,
        allowedRoles: [], bypassRoles: [],
    },

    birthday: { defaultRole: null, announcementChannel: null, timezone: "UTC" },

    // ==========================================
    //  VERIFICATION
    // ==========================================
    verification: {
        defaultMessage: "Click the button below to verify yourself and gain access to the server!",
        defaultButtonText: "Verify",
        autoVerify: {
            defaultCriteria: "none",
            defaultAccountAgeDays: 7,
            serverSizeThreshold: 1000,
            minAccountAge: 1, maxAccountAge: 365,
            sendDMNotification: true,
            criteria: {
                account_age: "Account must be older than specified days",
                server_size: "All users if server has less than 1000 members",
                none: "All users immediately",
            },
        },
        verificationCooldown: 5000,
        maxVerificationAttempts: 3,
        attemptWindow: 60000,
        maxCooldownEntries: 10000, maxAttemptEntries: 10000,
        cooldownCleanupInterval: 300000,
        maxAuditMetadataBytes: 4096, maxInMemoryAuditEntries: 1000,
        logAllVerifications: true, keepAuditTrail: true,
    },

    // ==========================================
    //  WELCOME / GOODBYE
    // ==========================================
    welcome: {
        defaultWelcomeMessage: "Welcome {user} to {server}! We now have {memberCount} members!",
        defaultGoodbyeMessage: "{user} has left the server. We now have {memberCount} members.",
        defaultWelcomeChannel: null, defaultGoodbyeChannel: null,
    },

    // ==========================================
    //  COUNTERS
    // ==========================================
    counters: {
        defaults: { name: "{name} Counter", description: "Server {name} counter", type: "voice", channelName: "{name}-{count}" },
        permissions: { deny: ["VIEW_CHANNEL"], allow: ["VIEW_CHANNEL", "CONNECT", "SPEAK"] },
        messages: { created: "✅ Created counter **{name}**", deleted: "🗑️ Deleted counter **{name}**", updated: "🔄 Updated counter **{name}**" },
        types: {
            members: { name: "👥 Members", description: "Total members", getCount: g => g.memberCount.toString() },
            bots: { name: "🤖 Bots", description: "Total bots", getCount: g => g.members.cache.filter(m => m.user.bot).size.toString() },
            members_only: { name: "👤 Humans", description: "Total humans", getCount: g => g.members.cache.filter(m => !m.user.bot).size.toString() },
        },
    },

    messages: {
        noPermission: "You do not have permission to use this command.",
        cooldownActive: "Please wait {time} before using this command again.",
        errorOccurred: "An error occurred while executing this command.",
        missingPermissions: "I am missing required permissions to perform this action.",
        commandDisabled: "This command has been disabled.",
        maintenanceMode: "The bot is currently in maintenance mode.",
    },

    // ==========================================
    //  FEATURE TOGGLES
    // ==========================================
    features: {
        economy: true, leveling: true, moderation: true, logging: true, welcome: true,
        tickets: true, giveaways: true, birthday: true, counter: true,
        verification: true, reactionRoles: true, joinToCreate: true,
        voice: true, search: true, tools: true, utility: true, community: true, fun: true, music: true,
    },
};

// ==============================================
//  HELPERS — OPTIMIZED & CLEAN
// ==============================================
const COMMAND_CATEGORY_FEATURE_MAP = {
    birthday: "birthday", community: "community", economy: "economy", fun: "fun",
    giveaway: "giveaways", jointocreate: "joinToCreate", leveling: "leveling",
    logging: "logging", moderation: "moderation", music: "music",
    reaction_roles: "reactionRoles", search: "search", serverstats: "counter",
    ticket: "tickets", tools: "tools", utility: "utility",
    verification: "verification", welcome: "welcome",
};

function normalizeCategoryKey(cat = "") {
    return String(cat).trim().toLowerCase().replace(/\s+/g, "_");
}

export function validateConfig(config) {
    const errors = [];
    if (process.env.NODE_ENV !== "production") {
        logger.debug("ENV CHECK — TOKEN:", !!process.env.DISCORD_TOKEN || !!process.env.TOKEN, "CLIENT_ID:", !!process.env.CLIENT_ID);
    }
    if (!process.env.DISCORD_TOKEN && !process.env.TOKEN) errors.push("Bot token required (DISCORD_TOKEN or TOKEN)");
    if (!process.env.CLIENT_ID) errors.push("CLIENT_ID required");
    if (process.env.NODE_ENV === "production") {
        const hasDbUrl = process.env.POSTGRES_URL || process.env.DATABASE_URL;
        if (!hasDbUrl && (!process.env.POSTGRES_HOST || !process.env.POSTGRES_USER || !process.env.POSTGRES_PASSWORD)) {
            errors.push("PostgreSQL required — set DATABASE_URL/POSTGRES_URL or individual vars");
        }
    }
    return errors;
}

const configErrors = validateConfig(botConfig);
if (configErrors.length) {
    logger.error("CONFIG ERRORS:\n" + configErrors.join("\n"));
    if (process.env.NODE_ENV === "production") process.exit(1);
}

export const getCommandPrefix = () => botConfig.commands?.prefix ?? "!";
export const getBotOwners = () => (botConfig.commands?.owners ?? []).map(id => String(id).trim()).filter(Boolean);
export const isBotOwner = (id) => id ? getBotOwners().includes(String(id)) : false;
export const isMaintenanceMode = () => botConfig.commands?.maintenanceMode === true;
export const isFeatureEnabled = (k) => !k || botConfig.features?.[k] !== false;
export const getBotMessage = (key, rep = {}) => Object.entries(rep).reduce((m, [k, v]) => m.replaceAll(`{${k}}`, String(v)), botConfig.messages?.[key] || key);

export function isCommandCategoryEnabled(cat) {
    const key = normalizeCategoryKey(cat);
    return !key || key === "core" || isFeatureEnabled(COMMAND_CATEGORY_FEATURE_MAP[key] || key);
}

export function getColor(path, fallback = "#99AAB5") {
    if (typeof path === "number") return path;
    if (path?.startsWith?.("#")) return parseInt(path.replace("#", ""), 16);
    const val = path?.split?.(".")?.reduce((o, k) => o?.[k] ?? fallback, botConfig.embeds.colors);
    return typeof val === "string" && val.startsWith("#") ? parseInt(val.slice(1), 16) : val;
}

export function getApplicationStatusColor(status) {
    const c = botConfig.applications?.statusColors?.[status];
    return c ? getColor(c) : getColor(status === "approved" ? "success" : status === "denied" ? "error" : "warning");
}

export function getDefaultApplicationQuestions() {
    return (botConfig.applications?.defaultQuestions || []).map(q => typeof q === "string" ? q : q.question).filter(Boolean);
}

export function getRandomColor() {
    const all = Object.values(botConfig.embeds.colors).flatMap(v => typeof v === "string" ? v : Object.values(v || {}));
    return getColor(all[Math.floor(Math.random() * all.length)]);
}

export const BotConfig = botConfig;
export default botConfig;
