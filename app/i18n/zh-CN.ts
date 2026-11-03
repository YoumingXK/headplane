/**
 * Simplified Chinese copy for the Headplane web UI.
 *
 * Keys are English source strings with whitespace collapsed to single spaces.
 * Template keys use `{source expression}` placeholders. The expression text is
 * the source inside `${...}` or `{...}`, also with whitespace collapsed.
 *
 * The Vite plugin in `plugin.ts` rewrites these strings at dev/build time.
 * Component source stays in English, so merging a new upstream release only
 * requires filling in keys that `pnpm exec tsx scripts/zh-cn-untranslated.ts`
 * reports. A missing key stays English.
 */
export const messages: Record<string, string> = {
  "(Tag Only)": "（仅标签）",
  "(current)": "（当前）",
  "). Fix it in the": "）。请在",
  ", indicating a server-side issue. Please check the Headscale server status and try again later.":
    "，表明服务器端出现问题。请检查 Headscale 服务器状态，稍后重试。",
  ". Declare": "。请到",
  ". If you leave the port out,": "。如果省略端口，",
  ". To learn how to set up the agent, visit the": "。要了解如何设置代理，请参阅",
  ". Upgrade Headscale to 0.29.2 or newer, or use Headscale 0.28.x.":
    "。请将 Headscale 升级到 0.29.2 或更高版本，或使用 Headscale 0.28.x。",
  "A frontend for the headscale coordination server": "Headscale 协调服务器的 Web 管理界面",
  "A host with this name already exists.": "已存在同名主机。",
  "A record with the domain name": "已有一条记录，域名为",
  "ACL Editor": "ACL 编辑器",
  "ACL Policy Unavailable": "ACL 策略不可用",
  "ACL Policy restricted": "ACL 策略受限制",
  "ACL Tags": "ACL 标签",
  "ACL tags can be used to reference machines in your ACL policies. See the":
    "ACL 标签可用于在 ACL 策略中引用机器。请参阅",
  "API Key": "API 密钥",
  "API key cannot be empty. Please enter a valid API key.":
    "API 密钥不能为空。请输入有效的 API 密钥。",
  "API key has expired": "API 密钥已过期",
  "API key is invalid (it may be incorrect or expired)": "API 密钥无效（可能不正确或已过期）",
  "API key is malformed (missing expiration). Please generate a new API key.":
    "API 密钥格式错误（缺少过期时间）。请重新生成 API 密钥。",
  "API key was not found in the Headscale database": "在 Headscale 数据库中找不到该 API 密钥",
  "Accept — allow the session immediately": "立即允许——马上允许该会话",
  "Access Control": "访问控制",
  "Access Control List (ACL)": "访问控制列表 (ACL)",
  "Access rules": "访问规则",
  "Access rules allow traffic from a set of sources to a set of destinations. Destinations must include a port, for example":
    "访问规则允许从一组源访问一组目标。目标必须包含端口，例如",
  "Access your network via Tailscale": "通过 Tailscale 访问你的网络",
  Action: "动作",
  Actions: "操作",
  Active: "有效",
  Add: "添加",
  "Add DNS record": "添加 DNS 记录",
  "Add Device": "添加设备",
  "Add a tag": "添加标签",
  "Add domain": "添加域名",
  "Add group": "添加用户组",
  "Add nameserver": "添加域名服务器",
  "Add this domain to a list of allowed email domains that can authenticate with Headscale via OIDC.":
    "将此域名加入允许通过 OIDC 向 Headscale 认证的邮箱域名列表。",
  "Add this group to a list of allowed groups that can authenticate with Headscale via OIDC.":
    "将此用户组加入允许通过 OIDC 向 Headscale 认证的用户组列表。",
  "Add this user to a list of allowed users that can authenticate with Headscale via OIDC.":
    "将此用户加入允许通过 OIDC 向 Headscale 认证的用户列表。",
  "Add user": "添加用户",
  Address: "地址",
  Addresses: "地址",
  Admin: "管理员",
  "Agent Needs Approval": "代理需要批准",
  "Agent Not Enabled": "代理未启用",
  "Agent Settings": "代理设置",
  "AggregateError handling not implemented yet": "尚未实现 AggregateError 处理。",
  All: "全部",
  "All Headscale users are already linked to other accounts.":
    "所有 Headscale 用户都已关联到其他账户。",
  "All Machines": "全部机器",
  Allow: "允许",
  "Allow your network to route internet traffic through this machine.":
    "允许网络经由这台机器转发互联网流量。",
  Allowed: "已允许",
  "Alternatively, you can switch Headscale to use": "或者，可以将 Headscale 切换为使用",
  "An error occurred while fetching the authentication keys for the following users:":
    "获取以下用户的预授权密钥时出错：",
  "An unexpected error occurred which is most likely a bug. Please consider reporting filing an issue on the":
    "发生了意外错误，这很可能是程序缺陷。请考虑在",
  "An unknown OIDC configuration error occurred. Please check the Headplane logs for more information.":
    "发生了未知的 OIDC 配置错误。请查看 Headplane 日志以获取更多信息。",
  "An unknown error occured": "发生了未知错误",
  "An unknown error occurred during OIDC authentication. Please try again later.":
    "OIDC 身份验证期间发生未知错误。请稍后重试。",
  "An unknown error occurred while trying to update the ACL policy.":
    "尝试更新 ACL 策略时发生未知错误。",
  "Android 8+": "Android 8 及以上",
  Approved: "已批准",
  Auditor: "审计员",
  "Authentication Error": "身份验证错误",
  "Authentication Restrictions": "身份验证限制",
  "Authentication permissions restricted": "身份验证权限受限制",
  "Authentication with the SSO provider failed. Please try again later. Headplane logs may provide more information.":
    "SSO 提供商身份验证失败。请稍后重试。Headplane 日志可能包含更多信息。",
  "Automatically register domain names for each device on the tailnet. Devices will be accessible at":
    "为 tailnet 上的每台设备自动注册域名。设备可通过以下地址访问",
  "Awaiting Approval": "等待批准",
  "Bad Gateway": "网关错误",
  "Bad Request": "错误的请求",
  "Browser SSH is not available": "浏览器 SSH 不可用",
  "Browser SSH is only available when OIDC authentication is enabled.":
    "只有启用 OIDC 身份验证后才能使用浏览器 SSH。",
  "Browser SSH is only available when the Headplane agent integration is enabled.":
    "只有启用 Headplane 代理集成后才能使用浏览器 SSH。",
  "Browser SSH requires OIDC authentication": "浏览器 SSH 需要 OIDC 身份验证",
  "Browser SSH requires the Headplane agent": "浏览器 SSH 需要 Headplane 代理",
  "By default, a machine’s permissions match its creator’s.":
    "默认情况下，机器的权限与其创建者相同。",
  "Can view machines, users, and generate their own auth keys.":
    "可以查看机器和用户，并生成自己的预授权密钥。",
  "Can view the admin console and manage ACLs and network settings. Cannot manage machines or users.":
    "可以查看管理控制台，并管理 ACL 与网络设置。不能管理机器或用户。",
  "Can view the admin console and manage machines and users. Cannot manage ACLs or network settings.":
    "可以查看管理控制台，并管理机器和用户。不能管理 ACL 或网络设置。",
  "Can view the admin console, manage network, machine, and user settings.":
    "可以查看管理控制台，并管理网络、机器和用户设置。",
  "Can view the admin console.": "可以查看管理控制台。",
  Cancel: "取消",
  "Cannot connect to Headscale API": "无法连接到 Headscale API",
  "Cannot view the admin console.": "无法查看管理控制台。",
  "Change linked user": "更改关联用户",
  "Change owner": "更改所有者",
  "Change role": "更改角色",
  "Check period": "检查周期",
  "Check — require periodic re-authentication": "定期重新认证——会话需要定期重新认证",
  "Clear filter": "清除筛选",
  "Clear filters": "清除筛选",
  "Clear search": "清除搜索",
  "Click to copy": "点击复制",
  "Client Connectivity": "客户端连通性",
  Close: "关闭",
  "Comma-separated tags (e.g. server, prod). The tag: prefix is added automatically.":
    "以逗号分隔的标签（例如 server、prod）。tag: 前缀会自动添加。",
  "Comments will be removed": "注释将被移除",
  "Configuration Issue": "配置问题",
  "Configuration Issue(s)": "配置问题",
  "Configuration Locked": "配置已锁定",
  Confirm: "确认",
  Connect: "连接",
  "Connect to devices you can't install Tailscale on by advertising IP ranges as subnet routes.":
    "通过将 IP 范围宣告为子网路由，连接那些无法安装 Tailscale 的设备。",
  Connected: "已连接",
  "Control which nodes can be reached over Tailscale SSH and as which local user.":
    "控制哪些节点可以通过 Tailscale SSH 访问，以及以哪个本地用户身份访问。",
  "Copied IP address to clipboard": "已将 IP 地址复制到剪贴板",
  "Copied to clipboard": "已复制到剪贴板",
  "Copy failed. Please copy the address manually.": "复制失败。请手动复制地址。",
  "Copy failed. Please copy the text manually.": "复制失败。请手动复制文本。",
  "Copy this key now. You will not be able to see the full key again.":
    "请立即复制此密钥。之后将无法再次查看完整密钥。",
  "Create a Headscale user": "创建 Headscale 用户",
  "Create a key owned by ACL tags instead of a user.": "创建由 ACL 标签而非用户拥有的密钥。",
  "Create pre-auth key": "创建预授权密钥",
  "Create the ACL policy file at the specified path in your Headscale configuration.":
    "在 Headscale 配置中指定的路径创建 ACL 策略文件。",
  Created: "创建时间",
  "Created At": "创建于",
  Creator: "创建者",
  "DNS Records": "DNS 记录",
  "DNS override updated successfully": "DNS 覆盖已更新",
  "DNS record added successfully": "DNS 记录已添加",
  "DNS record removed successfully": "DNS 记录已移除",
  Dark: "深色",
  Debug: "调试",
  Decrement: "减少",
  Delete: "删除",
  "Deleted users cannot be recovered.": "已删除的用户无法恢复。",
  Destinations: "目标",
  "Devices authenticated with this key will be automatically removed once they go offline.":
    "使用此密钥认证的设备离线后会被自动移除。",
  "Devices will no longer be accessible via your tailnet domain. The search domain will also be disabled.":
    "设备将无法再通过 tailnet 域名访问。搜索域也会被禁用。",
  Disable: "禁用",
  "Discard Changes": "放弃更改",
  Dismiss: "关闭",
  "Display Name": "显示名称",
  Docs: "文档",
  Domain: "域名",
  "Domain added successfully": "域名已添加",
  "Domain added successfully.": "域名已添加。",
  "Domain removed successfully": "域名已移除",
  "Domain removed successfully.": "域名已移除。",
  Domains: "域名",
  Download: "下载",
  Edit: "编辑",
  "Edit ACL tags": "编辑 ACL 标签",
  "Edit SSH rule": "编辑 SSH 规则",
  "Edit access rule": "编辑访问规则",
  "Edit file": "编辑文件",
  "Edit groups": "编辑用户组",
  "Edit machine name": "编辑机器名称",
  "Edit route settings": "编辑路由设置",
  Email: "邮箱",
  Enable: "启用",
  Enabled: "已启用",
  Endpoints: "端点",
  "Enter Username": "输入用户名",
  "Enter a domain to match users with their email addresses.": "输入域名，以按邮箱地址匹配用户。",
  "Enter an API key to authenticate with Headplane. You can generate one by running":
    "输入 API 密钥以登录 Headplane。可在终端中运行",
  "Enter the domain and IP address for the new DNS record.": "输入新 DNS 记录的域名和 IP 地址。",
  "Enter the username you want to use to connect to": "输入要用于连接的用户名，主机为",
  Ephemeral: "临时",
  Error: "错误",
  "Error Details": "错误详情",
  "Error while validating API key (see logs for details)": "验证 API 密钥时出错（详情见日志）",
  "Exit Node": "出口节点",
  "Exit node": "出口节点",
  "Exit nodes": "出口节点",
  Expiration: "过期时间",
  Expire: "使过期",
  "Expire Key": "使密钥过期",
  "Expire auth key?": "使预授权密钥过期？",
  Expired: "已过期",
  "Expiring this authentication key will immediately prevent it from being used to authenticate new devices. This action cannot be undone.":
    "此预授权密钥将立即无法用于认证新设备。此操作无法撤销。",
  "Failed to load Go WASM helper": "加载 Go WASM 辅助脚本失败",
  "Failed to load the editor.": "无法加载编辑器。",
  "Failed to reassign user role.": "重新分配用户角色失败。",
  "Failed to transfer ownership.": "转移所有权失败。",
  "Full domain": "完整域名",
  "Generate Pre-auth Key": "生成预授权密钥",
  "Generate auth key": "生成预授权密钥",
  "Global Nameservers": "全局域名服务器",
  Group: "用户组",
  "Group added successfully.": "用户组已添加。",
  "Group names must start with group: and may only contain lowercase letters, numbers and dashes.":
    "用户组名称必须以 group: 开头，且只能包含小写字母、数字和短横线。",
  "Group removed successfully.": "用户组已移除。",
  Groups: "用户组",
  "Groups bundle users together so rules can refer to a team instead of individual accounts. Membership is stored in the policy, not in Headscale.":
    "用户组把多个用户组合在一起，这样规则可以指向一个团队，而不是逐个账户。成员关系保存在策略中，而不是 Headscale 中。",
  "Groups live in the ACL policy, not in Headscale. Changing them here rewrites the":
    "用户组写在 ACL 策略中，而不是 Headscale 中。在这里修改会重写策略的",
  "Groups updated successfully": "用户组已更新",
  "Groups, tags, hosts, users or autogroups allowed to initiate the connection.":
    "允许发起连接的用户组、标签、主机、用户或 autogroup。",
  Hairpinning: "发夹",
  "Headplane Agent": "Headplane 代理",
  "Headplane GitHub": "Headplane GitHub",
  "Headplane SSH Documentation": "Headplane SSH 文档",
  "Headplane Users": "Headplane 用户",
  "Headplane could not automatically match your SSO identity to an existing Headscale user. Please select your user from the list below to link your account and continue.":
    "Headplane 无法自动将你的 SSO 身份匹配到现有的 Headscale 用户。请从下面的列表中选择你的用户以关联账户并继续。",
  "Headplane is configured to use secure cookies, but this site is being served over an insecure connection and login will not work correctly.":
    "Headplane 已配置为使用安全 Cookie，但当前站点通过不安全的连接提供服务，登录将无法正常工作。",
  "Headplane is free and open-source. Please consider": "Headplane 是自由开源软件。请考虑",
  "Headplane logo": "Headplane 标志",
  "Headplane was unable to reach the Headscale API. Please check your network setup and configuration to ensure Headplane is able to connect.":
    "Headplane 无法访问 Headscale API。请检查网络和配置，确保 Headplane 能够连接。",
  "Headscale 0.29 beta releases through 0.29.1 reject Tailscale's browser/WASM":
    "Headscale 0.29 测试版至 0.29.1 会拒绝 Tailscale 的浏览器/WASM",
  "Headscale API Error": "Headscale API 错误",
  "Headscale Unreachable": "Headscale 无法访问",
  "Headscale docs": "Headscale 文档",
  "Headscale fully supports pre-authentication keys in order to easily add devices to your Tailnet. To learn more about using pre-authentication keys, visit the":
    "Headscale 完整支持预授权密钥，以便把设备加入 Tailnet。要进一步了解预授权密钥，请参阅",
  "Headscale rejected the pre-auth key": "Headscale 拒绝了预授权密钥",
  "Headscale supports adding custom DNS records to your Tailnet. As of now, only":
    "Headscale 支持向 Tailnet 添加自定义 DNS 记录。目前仅支持",
  "Headscale supports restricting OIDC authentication to only allow certain email domains, groups, or users to authenticate. This can be used to limit access to your Tailnet to only certain users or groups and Headplane will also respect these settings when authenticating.":
    "Headscale 支持限制 OIDC 身份验证，只允许特定邮箱域名、用户组或用户登录。这可以用来把 Tailnet 的访问限制在特定用户或用户组，Headplane 在认证时也会遵守这些设置。",
  "Headscale user linked successfully": "Headscale 用户已关联",
  "Headscale users that belong to this group.": "属于此用户组的 Headscale 用户。",
  Healthy: "正常",
  "Hide server URL": "隐藏服务器 URL",
  "Host names may only contain lowercase letters, numbers and dashes.":
    "主机名只能包含小写字母、数字和短横线。",
  Hosts: "主机",
  "Hosts give a name to an IP address or CIDR range so it can be referenced from rules.":
    "主机为 IP 地址或 CIDR 范围提供名称，以便在规则中引用。",
  "How long a check-mode session stays valid, for example 12h.":
    "check 模式会话保持有效的时间，例如 12h。",
  "ID for this machine. Used in the Headscale API.": "此机器的 ID。用于 Headscale API。",
  "IP Address": "IP 地址",
  "IT Admin": "IT 管理员",
  "If you don't see your user listed, please contact your administrator. To automatically link new users in the future, ensure that the Headscale user has the same email address as the SSO identity.":
    "如果你没有在列表中看到自己的用户，请联系管理员。若要在以后自动关联新用户，请确保 Headscale 用户与 SSO 身份使用相同的邮箱地址。",
  "In order to resolve this issue, there are two possible actions you can take:":
    "要解决此问题，可以采取以下两种做法：",
  Increment: "增加",
  "Information about this machine’s network. Used to debug connection issues.":
    "此机器的网络信息，用于排查连接问题。",
  "Invalid `action_id` provided.": "提供了无效的 `action_id`。",
  "Invalid `register_key` in the form data.": "表单数据中的 `register_key` 无效。",
  "Invalid action": "无效操作",
  "Invalid action provided.": "提供了无效操作。",
  "Invalid response from Headscale API": "Headscale API 返回了无效响应",
  "Joining Tailnet…": "正在加入 Tailnet…",
  "Keep in mind that changing this can lead to all sorts of unexpected behavior and may break existing devices in your tailnet.":
    "更改此项可能导致各种意外行为，并可能破坏 tailnet 中的现有设备。",
  Key: "密钥",
  "Key Expiration": "密钥过期时间",
  "Key expiry": "密钥过期",
  "Last Login": "上次登录",
  "Last Seen": "最后在线",
  "Last synced:": "上次同步：",
  "Learn More": "了解更多",
  "Learn more": "了解更多",
  "Learn more.": "了解更多。",
  Light: "浅色",
  "Link Headscale user": "关联 Headscale 用户",
  "Link and Continue": "关联并继续",
  "Link your Headscale account": "关联你的 Headscale 账户",
  "Loading editor…": "正在加载编辑器…",
  Logout: "退出登录",
  "Machine Details": "机器详情",
  "Machine Key": "机器密钥",
  "Machine Settings": "机器设置",
  "Machine expired": "机器已过期",
  "Machine name": "机器名称",
  "Machine names must be valid DNS labels: lowercase letters, numbers, and hyphens only, and must start and end with a letter or number.":
    "机器名称必须是有效的 DNS 标签：只能包含小写字母、数字和连字符，并且必须以字母或数字开头和结尾。",
  "Machine reassigned": "机器已重新分配",
  "Machine renamed": "机器已重命名",
  Machines: "机器",
  "Machines will belong to this user when they authenticate.": "机器通过身份验证后将归此用户所有。",
  "Magic DNS state updated successfully": "Magic DNS 状态已更新",
  "Manage Auth Keys": "管理预授权密钥",
  "Manage Restrictions": "管理限制",
  "Manage the devices connected to your Tailnet.": "管理连接到 Tailnet 的设备。",
  "Manage the users in your network and their permissions.": "管理网络中的用户及其权限。",
  "Managed by": "管理者",
  Member: "成员",
  Members: "成员",
  "Missing API key. Please enter your API key.": "缺少 API 密钥。请输入你的 API 密钥。",
  "Missing `action_id` in the form data.": "表单数据中缺少 `action_id`。",
  "Missing `enabled` in the form data.": "表单数据中缺少 `enabled`。",
  "Missing `ephemeral` in the form data.": "表单数据中缺少 `ephemeral`。",
  "Missing `expiry` in the form data.": "表单数据中缺少 `expiry`。",
  "Missing `headplane_user_id` in the form data.": "表单数据中缺少 `headplane_user_id`。",
  "Missing `headplane_user_id` or `headscale_user_id` in the form data.":
    "表单数据中缺少 `headplane_user_id` 或 `headscale_user_id`。",
  "Missing `headplane_user_id` or `new_role` in the form data.":
    "表单数据中缺少 `headplane_user_id` 或 `new_role`。",
  "Missing `headscale_user_id` in the form data.": "表单数据中缺少 `headscale_user_id`。",
  "Missing `key_id` or `key` in the form data.": "表单数据中缺少 `key_id` 或 `key`。",
  "Missing `name` in the form data.": "表单数据中缺少 `name`。",
  "Missing `node_id` in the form data.": "表单数据中缺少 `node_id`。",
  "Missing `policy` in the form data.": "表单数据中缺少 `policy`。",
  "Missing `register_key` in the form data.": "表单数据中缺少 `register_key`。",
  "Missing `reusable` in the form data.": "表单数据中缺少 `reusable`。",
  "Missing `routes` in the form data.": "表单数据中缺少 `routes`。",
  "Missing `tags` in the form data.": "表单数据中缺少 `tags`。",
  "Missing `user_id` in the form data.": "表单数据中缺少 `user_id`。",
  "Missing `user_name` in the form data.": "表单数据中缺少 `user_name`。",
  "Missing `user` in the form data.": "表单数据中缺少 `user`。",
  "Missing `username` in the form data.": "表单数据中缺少 `username`。",
  "Missing authentication keys": "缺少预授权密钥",
  "Must specify either a user or ACL tags.": "必须指定用户或 ACL 标签。",
  Name: "名称",
  "Named IP addresses and CIDR ranges that can be referenced from rules.":
    "可在规则中引用的命名 IP 地址和 CIDR 范围。",
  Nameserver: "域名服务器",
  "Nameserver added successfully": "域名服务器已添加",
  "Nameserver removed successfully": "域名服务器已移除",
  Nameservers: "域名服务器",
  "Need access to the dashboard? Contact your administrator to request access.":
    "需要访问控制台？请联系管理员申请权限。",
  "Network Admin": "网络管理员",
  Never: "永不",
  "New SSH rule": "新建 SSH 规则",
  "New access rule": "新建访问规则",
  "New host": "新建主机",
  No: "否",
  "No DNS records found": "未找到 DNS 记录",
  "No SSH rules are defined yet.": "尚未定义 SSH 规则。",
  "No SSH users yet": "尚无 SSH 用户",
  "No access rules are defined yet.": "尚未定义访问规则。",
  "No action provided.": "未提供操作。",
  "No changes": "无更改",
  "No configuration is available": "没有可用的配置",
  "No description available.": "没有可用的描述。",
  "No destinations yet": "尚无目标",
  "No domain provided.": "未提供域名。",
  "No expiry": "无过期时间",
  "No group provided.": "未提供用户组。",
  "No groups are defined yet.": "尚未定义用户组。",
  "No hosts are defined yet.": "尚未定义主机。",
  "No machine ID provided": "未提供机器 ID",
  "No machines": "没有机器",
  "No machines match the current filters": "没有机器符合当前筛选条件",
  "No members": "没有成员",
  "No members yet": "尚无成员",
  "No owners": "没有所有者",
  "No owners yet": "尚无所有者",
  "No pre-auth keys have been created yet.": "尚未创建预授权密钥。",
  "No pre-auth keys match the selected filters.": "没有符合所选筛选条件的预授权密钥。",
  "No results found.": "未找到结果。",
  "No routes are advertised by this machine": "此机器未宣告任何路由",
  "No routes provided to update": "没有要更新的路由",
  "No sources yet": "尚无源",
  "No tags are defined yet.": "尚未定义标签。",
  "No tags are set on this machine": "此机器未设置标签",
  "No user provided.": "未提供用户。",
  "No users have signed into Headplane yet.": "还没有用户登录过 Headplane。",
  "Node Offline": "节点离线",
  "Node key": "节点密钥",
  "Node not found": "未找到节点",
  "Nodes synced:": "已同步节点：",
  "Not assigned to any machine": "未分配给任何机器",
  "Not linked": "未关联",
  "Not seeing the tags you expect? Tags need to be defined in your access control policy before they can be assigned to machines.":
    "没有看到预期的标签？标签需要先在访问控制策略中定义，然后才能分配给机器。",
  "OIDC is not configured on this Headscale instance.": "此 Headscale 实例未配置 OIDC。",
  "OIDC provider": "OIDC 提供商管理",
  "OS hostname": "操作系统主机名",
  "OS hostname is published by the machine’s operating system and is used as the default name for the machine.":
    "操作系统主机名由机器的操作系统发布，并用作机器的默认名称。",
  Offline: "离线",
  "One or more tags are not defined in your ACL policy. Please add them to your policy before assigning them to a machine.":
    "一个或多个标签未在 ACL 策略中定义。请先将它们加入策略，再分配给机器。",
  Online: "在线",
  "Only clients that support split DNS (Tailscale v1.8 or later for most platforms) will use this nameserver. Older clients will ignore it.":
    "只有支持分流 DNS 的客户端（大多数平台为 Tailscale v1.8 或更高版本）会使用此域名服务器。较旧的客户端会忽略它。",
  "Only single-label or fully-qualified queries matching this suffix should use the nameserver.":
    "只有与此后缀匹配的单标签或完全限定查询才应使用此域名服务器。",
  "Only the owner can transfer ownership.": "只有所有者可以转移所有权。",
  "Only the owner can transfer ownership. After this, you will no longer be able to manage ownership.":
    "只有所有者可以转移所有权。此后你将无法再管理所有权。",
  "Optional. Restricts the rule to a single protocol (tcp, udp, icmp, ...).":
    "可选。将规则限制为单一协议（tcp、udp、icmp 等）。",
  "Override DNS servers": "覆盖 DNS 服务器",
  "Override local DNS settings": "覆盖本地 DNS 设置",
  Owner: "所有者",
  "Ownership transferred successfully": "所有权已转移",
  "Paste the registration URL or full hskey-authreq-... key from tailscale up.":
    "粘贴 tailscale up 显示的注册 URL 或完整的 hskey-authreq-... 密钥。",
  "Paste the registration URL or full key shown by tailscale up.":
    "粘贴 tailscale up 显示的注册 URL 或完整密钥。",
  "Policy cannot be edited visually": "无法以可视化方式编辑策略",
  "Policy is not writable": "策略不可写",
  "Pre-Auth Keys": "预授权密钥",
  "Pre-auth key created": "预授权密钥已创建",
  "Pre-auth key expired": "预授权密钥已过期",
  "Pre-auth key permissions restricted": "预授权密钥权限受限制",
  "Preview changes": "预览更改",
  "Preview rules": "预览规则",
  "Previewing rules is not available yet. This feature is still in development and is pretty complicated to implement. Hopefully I will be able to get to it soon.":
    "规则预览尚不可用。此功能仍在开发中，实现起来相当复杂。希望很快能够完成。",
  Protocol: "协议",
  "Public key which uniquely identifies this machine.": "唯一标识此机器的公钥。",
  "Read-only ACL Policy": "只读 ACL 策略",
  "Reassigning a node owner is no longer supported on this Headscale version.":
    "此 Headscale 版本不再支持重新分配节点所有者。",
  "Record Type": "记录类型",
  "Register Machine Key": "注册机器密钥",
  Remove: "移除",
  Rename: "重命名",
  "Rename Tailnet": "重命名 Tailnet",
  "Request URL:": "请求 URL：",
  "Restrict to domain": "限制到域名",
  Retry: "重试",
  "Retry Connection": "重试连接",
  Reusable: "可重复使用",
  Review: "查看",
  Role: "角色",
  "Roles control what the user can access in Headplane. Each role grants a specific set of capabilities.":
    "角色决定用户在 Headplane 中可以访问的内容。每个角色授予一组特定的能力。",
  Route: "路由",
  "Routes updated": "路由已更新",
  Rules: "规则",
  "Rules are evaluated top to bottom. Traffic is denied unless a rule allows it.":
    "规则从上到下依次评估。除非有规则允许，否则流量会被拒绝。",
  "SSH rules": "SSH 规则",
  "SSH rules control Tailscale SSH access between nodes. Read the":
    "SSH 规则控制节点之间的 Tailscale SSH 访问。请阅读",
  "SSH users": "SSH 用户",
  "SSH via the web follows the same ACL rules as regular SSH access in Headscale, so only permitted usernames will work.":
    "浏览器 SSH 遵循与 Headscale 中普通 SSH 相同的 ACL 规则，因此只有被允许的用户名才能登录。",
  "SSO Temporarily Unavailable": "SSO 暂时不可用",
  Save: "保存",
  "Search Domain": "搜索域",
  "Search Domains": "搜索域",
  "Search by name or IP address...": "按名称或 IP 地址搜索…",
  "Search machines": "搜索机器",
  "See the": "请参阅",
  "Select a Headscale user...": "选择 Headscale 用户…",
  "Select a status": "选择状态",
  "Select a user": "选择用户",
  "Select a user...": "选择用户…",
  "Select which Headscale user this identity should be linked to. This controls which machines they can manage and enables self-service features.":
    "选择此身份应关联的 Headscale 用户。这决定他们可以管理哪些机器，并启用自助功能。",
  "Set custom DNS search domains for your Tailnet. When using Magic DNS, your tailnet domain is used as the first search domain.":
    "为 Tailnet 设置自定义 DNS 搜索域。使用 Magic DNS 时，tailnet 域名会作为第一个搜索域。",
  "Set the nameservers used by devices on the Tailnet to resolve DNS queries.":
    "设置 Tailnet 上的设备用于解析 DNS 查询的域名服务器。",
  "Set this key to expire after a certain number of days.": "设置此密钥在若干天后过期。",
  "Set up OIDC": "设置 OIDC",
  Settings: "设置",
  "Short domain": "短域名",
  "Show server URL": "显示服务器 URL",
  "Sign In": "登录",
  "Sign in again": "重新登录",
  "Since MagicDNS is enabled, you can access devices based on their name and also at":
    "由于已启用 MagicDNS，你可以按名称访问设备，也可以通过以下地址访问",
  "Since this user is authenticated via an external provider, they will be recreated if they sign in again.":
    "由于此用户通过外部提供商认证，如果再次登录，该用户会被重新创建。",
  "Single Sign-On": "单点登录",
  "Sort by IP address": "按 IP 地址排序",
  "Sort by last seen": "按最后在线时间排序",
  "Sort by name": "按名称排序",
  "Sort by version": "按版本排序",
  Sources: "源",
  "Split DNS": "分流 DNS",
  Status: "状态",
  "Status Code:": "状态码：",
  "Status Text:": "状态文本：",
  "Subnet router": "子网路由器",
  "Subnet routes": "子网路由",
  Subnets: "子网",
  "Subnets & Routing": "子网与路由",
  "Subnets let you expose physical network routes onto Tailscale.":
    "子网让你把物理网络路由暴露到 Tailscale 上。",
  "Sync Error": "同步错误",
  "Sync Now": "立即同步",
  "Syncing…": "正在同步…",
  System: "跟随系统",
  Tag: "标签",
  "Tag Only": "仅标签",
  "Tag names must start with tag: and may only contain lowercase letters, numbers and dashes.":
    "标签名称必须以 tag: 开头，且只能包含小写字母、数字和短横线。",
  "Tag owners": "标签所有者",
  "Tag-only": "仅标签",
  "Tag-only key": "仅标签密钥",
  "Tag-owned": "标签所有",
  Tags: "标签",
  "Tags & Groups": "标签与用户组",
  "Tags identify machines by role instead of by owner. A tag must be declared here before it can be assigned to a node — see the":
    "标签按角色而不是所有者来标识机器。标签必须先在这里声明，然后才能分配给节点——请参阅",
  "Tags updated": "标签已更新",
  "Tailnet Name": "Tailnet 名称",
  "Tailnet name": "Tailnet 名称",
  "Tailnet renamed successfully": "Tailnet 已重命名",
  "Tailscale ACL guide": "Tailscale ACL 指南",
  "Tailscale IPv4": "Tailscale IPv4",
  "Tailscale IPv6": "Tailscale IPv6",
  "Tailscale SSH": "Tailscale SSH",
  "Tailscale SSH documentation": "Tailscale SSH 文档",
  "Tailscale documentation": "Tailscale 文档",
  "Tailscale tag documentation": "Tailscale 标签文档",
  "Tailscale version": "Tailscale 版本",
  "That Headscale user is already linked to another account.":
    "该 Headscale 用户已关联到另一个账户。",
  "The ACL file is used to define the access control rules for your network. You can find more information about the ACL file in the":
    "ACL 文件用于定义网络的访问控制规则。你可以在以下资料中了解更多关于 ACL 文件的信息：",
  "The ACL policy is currently unavailable because the policy file does not exist on the server. This usually indicates that Headscale is running in":
    "ACL 策略当前不可用，因为服务器上不存在策略文件。这通常表示 Headscale 正在以",
  "The ACL policy is read-only. Set `policy.mode` to `database` in your Headscale configuration to edit groups.":
    "ACL 策略是只读的。请在 Headscale 配置中将 `policy.mode` 设为 `database` 后再编辑用户组。",
  "The ACL policy mode is most likely set to": "ACL 策略模式很可能被设置为",
  "The Headplane Agent syncs node information like OS version and connectivity details from your Tailnet.":
    "Headplane 代理会从 Tailnet 同步操作系统版本和连通性等节点信息。",
  "The Headscale API returned an unexpected response.": "Headscale API 返回了意外响应。",
  "The Headscale configuration file is not editable through the web interface. Please ensure that you have correctly given Headplane write access to the file.":
    "无法通过 Web 界面编辑 Headscale 配置文件。请确认已正确授予 Headplane 对该文件的写入权限。",
  "The Headscale configuration file is not editable.": "Headscale 配置文件不可编辑。",
  "The Headscale configuration is read-only. You cannot make changes to the configuration":
    "Headscale 配置是只读的。你无法更改配置",
  "The OIDC provider is missing required endpoints. Ensure the discovery URL is correct or provide manual endpoint overrides in your configuration.":
    "OIDC 提供商缺少必需的端点。请确认发现 URL 正确，或在配置中手动指定端点。",
  "The OpenID Connect (OIDC) Single Sign-On (SSO) configuration has issues:":
    "OpenID Connect (OIDC) 单点登录 (SSO) 配置存在问题：",
  "The SSO provider did not correctly redirect back to Headplane with the required parameters. Please ensure your SSO provider is configured correctly.":
    "SSO 提供商未正确重定向回 Headplane，缺少必需参数。请确认 SSO 提供商配置正确。",
  "The SSO provider did not return a valid user identifier. Please ensure your SSO provider is correctly configured to provide the":
    "SSO 提供商未返回有效的用户标识。请确认 SSO 提供商已正确配置并提供",
  "The Tailnet owner cannot be reassigned.": "不能重新分配 Tailnet 所有者。",
  "The agent is waiting for its Tailnet registration to be approved. Headplane will attempt to auto-approve it, but if that fails, you can complete approval by visiting":
    "代理正在等待其 Tailnet 注册获得批准。Headplane 会尝试自动批准；如果失败，你可以访问",
  "The group to allow for OIDC authentication.": "允许通过 OIDC 认证的用户组。",
  "The hostname": "主机名",
  "The local Unix users that may be logged into.": "可以登录的本地 Unix 用户。",
  "The machine key is given when you run the following command on your device:":
    "在设备上运行以下命令时会给出机器密钥：",
  "The nodes that accept the SSH session.": "接受 SSH 会话的节点。",
  "The owner of the machine is the user associated with it.": "机器的所有者是与之关联的用户。",
  "The policy could not be parsed (": "无法解析策略（",
  "The policy is not valid HuJSON": "策略不是有效的 HuJSON",
  "The policy must be a JSON object": "策略必须是一个 JSON 对象",
  "The provided API key for OIDC authentication is invalid. Ensure that":
    "用于 OIDC 身份验证的 API 密钥无效。请确认",
  "The server responded with a status code of": "服务器响应的状态码为",
  "The settings page is still under construction. As I'm able to add more features, I'll be adding them here. If you require any features, feel free to open an issue on the GitHub repository.":
    "设置页面仍在建设中。我会在能够添加更多功能时把它们放在这里。如果你需要某项功能，欢迎在 GitHub 仓库中提出 issue。",
  "The status code indicates an authentication error. Please verify your API key and Headplane configuration.":
    "该状态码表示身份验证错误。请检查 API 密钥和 Headplane 配置。",
  "The user to allow for OIDC authentication.": "允许通过 OIDC 认证的用户。",
  "Their keys may not be listed correctly. Please check the server logs for more information.":
    "他们的密钥可能未正确列出。请查看服务器日志以获取更多信息。",
  "There was an error communicating with the Headscale API.": "与 Headscale API 通信时出错。",
  "There was an error processing your request.": "处理你的请求时出错。",
  "These Headscale users are not linked to a Headplane account and cannot be managed through Headplane.":
    "这些 Headscale 用户尚未关联到 Headplane 账户，无法通过 Headplane 管理。",
  "This creates a new user in Headscale. The user will appear in the “Unlinked Headscale Users” section until they sign in":
    "这将在 Headscale 中创建一个新用户。在登录之前，该用户会显示在“未关联的 Headscale 用户”一节",
  "This domain already exists in the list.": "此域名已在列表中。",
  "This group already exists in the list.": "此用户组已在列表中。",
  "This is not a valid domain.": "这不是有效的域名。",
  "This is the base domain name of your Tailnet. Devices are accessible at":
    "这是 Tailnet 的基础域名。设备可通过以下地址访问",
  "This machine advertises Tailscale SSH, which allows you to authenticate SSH credentials using your Tailscale account and via the Headplane web UI.":
    "此机器宣告了 Tailscale SSH，你可以使用 Tailscale 账户并通过 Headplane Web 界面认证 SSH 凭据。",
  "This machine advertises subnet routes.": "此机器宣告了子网路由。",
  "This machine has key expiry disabled and will never need to re-authenticate.":
    "此机器已禁用密钥过期，永远不需要重新认证。",
  'This machine has unadvertised subnet routes. Review this from the "Edit route settings..." option in the machine\'s menu.':
    "此机器有未宣告的子网路由。请从机器菜单的“编辑路由设置...”中查看。",
  "This machine is accessible by the hostname": "此机器可通过以下主机名访问",
  "This machine is acting as an exit node.": "此机器正在作为出口节点。",
  "This machine is advertising these routes, but they must be approved before traffic will be routed to them.":
    "此机器正在宣告这些路由，但必须先批准，流量才会被路由到它们。",
  "This machine is expired and will not be able to connect to the network. Re-authenticate with Tailscale on the machine to re-enable it.":
    "此机器已过期，无法连接到网络。请在机器上重新向 Tailscale 认证以重新启用。",
  "This machine is not an exit node": "此机器不是出口节点",
  'This machine is requesting to be used as an exit node. Review this from the "Edit route settings..." option in the machine\'s menu.':
    "此机器请求用作出口节点。请从机器菜单的“编辑路由设置...”中查看。",
  "This machine is running the Headplane agent, which allows it to provide host information in the web UI.":
    "此机器正在运行 Headplane 代理，因此可以在 Web 界面中提供主机信息。",
  "This machine will be accessible by the hostname": "此机器将可通过以下主机名访问",
  "This machine will be permanently removed from your network. To re-add it, you will need to reauthenticate to your tailnet from the device.":
    "此机器将从网络中永久移除。要重新添加，你需要从设备重新认证到 tailnet。",
  "This machine’s IPv4 address within your tailnet (your private Tailscale network).":
    "此机器在 tailnet（你的私有 Tailscale 网络）中的 IPv4 地址。",
  "This machine’s IPv6 address within your tailnet (your private Tailscale network). Connections within your tailnet support IPv6 even if your ISP does not.":
    "此机器在 tailnet（你的私有 Tailscale 网络）中的 IPv6 地址。即使 ISP 不支持 IPv6，tailnet 内部连接也支持 IPv6。",
  "This name is shown in the admin panel, in Tailscale clients, and used when generating MagicDNS names.":
    "此名称会显示在管理面板和 Tailscale 客户端中，并用于生成 MagicDNS 名称。",
  "This nameserver already exists.": "此域名服务器已存在。",
  "This nameserver will only be used for some domains.": "此域名服务器只用于部分域名。",
  "This page could not be loaded because the Headscale server is unreachable. It will be available once the connection is restored.":
    "无法加载此页面，因为 Headscale 服务器不可达。连接恢复后即可使用。",
  "This policy contains comments. Saving a change made in the visual editor rewrites the policy and drops them.":
    "此策略包含注释。在可视化编辑器中保存更改会重写策略并丢弃注释。",
  "This record already exists.": "此记录已存在。",
  "This user already exists in the list.": "此用户已在列表中。",
  "This user is not in any group": "此用户不属于任何用户组",
  "This version of Headplane was not built with browser SSH support.":
    "此版本的 Headplane 在构建时未包含浏览器 SSH 支持。",
  "This will disconnect the machine from your Tailnet. In order to reconnect, you will need to re-authenticate from the device.":
    "这将使机器断开与 Tailnet 的连接。要重新连接，需要在设备上重新认证。",
  "To register a device with this key:": "使用此密钥注册设备：",
  "Traffic to these routes are being routed through this machine.":
    "发往这些路由的流量正通过此机器转发。",
  "Transfer ownership": "转移所有权",
  "Unable to complete SSO login due to missing or invalid session data. Ensure that your Headplane cookie configuration is correct and that your browser is accepting cookies.":
    "无法完成 SSO 登录，因为会话数据缺失或无效。请确认 Headplane 的 Cookie 配置正确，并且浏览器接受 Cookie。",
  "Unable to connect to the Headscale server. Data shown may be stale and changes cannot be saved until the connection is restored.":
    "无法连接到 Headscale 服务器。显示的数据可能已过期，在连接恢复之前无法保存更改。",
  "Unable to reach the OIDC provider for discovery. SSO will retry on the next login attempt.":
    "无法访问 OIDC 提供商进行发现。下次登录时会重试 SSO。",
  "Unable to reach the identity provider. Single Sign-On will be available once the provider is reachable again. You can still sign in with an API key.":
    "无法访问身份提供商。提供商恢复可达后即可使用单点登录。你仍可以使用 API 密钥登录。",
  "Unexpected Error": "意外错误",
  Unknown: "未知",
  "Unlinked Headscale Users": "未关联的 Headscale 用户",
  "Updated policy": "策略已更新",
  "Use a valid DNS label: lowercase letters, numbers, and hyphens only. It must start and end with a letter or number.":
    "名称必须是有效的 DNS 标签：只能包含小写字母、数字和连字符，并且必须以字母或数字开头和结尾。",
  "Use as exit node": "用作出口节点",
  "Use this IPv4 or IPv6 address to resolve names.": "使用此 IPv4 或 IPv6 地址解析名称。",
  "Use this key to authenticate more than one device.": "使用此密钥认证多台设备。",
  Used: "已使用",
  "Used/Expired": "已使用/已过期",
  User: "用户",
  "User account not linked": "用户账户未关联",
  "User added successfully.": "用户已添加。",
  "User created successfully": "用户已创建",
  "User deleted successfully": "用户已删除",
  "User not found.": "未找到用户。",
  "User reassigned successfully": "用户已重新分配",
  "User removed successfully.": "用户已移除。",
  "User renamed successfully": "用户已重命名",
  Username: "用户名",
  "Usernames must be at least 2 characters, start with a letter, and contain only":
    "用户名至少需要 2 个字符，必须以字母开头，且只能包含",
  Users: "用户",
  "Users and groups allowed to assign this tag to a node.":
    "允许将此标签分配给节点的用户和用户组。",
  "Users are managed locally.": "用户在本地管理。",
  "Users are managed through your": "用户通过你的",
  "Users cannot be deleted if they have machines. Please delete or re-assign their machines to other users before proceeding.":
    "如果用户拥有机器，则无法删除。请先删除或将其机器重新分配给其他用户。",
  "Users managed by OIDC cannot be renamed": "由 OIDC 管理的用户不能重命名",
  "Users of your tailnet can use this DNS name to access this machine.":
    "tailnet 中的用户可以使用此 DNS 名称访问此机器。",
  "Users of your tailnet can use this DNS short name to access this machine.":
    "tailnet 中的用户可以使用此 DNS 短名称访问此机器。",
  Varies: "地址会变化",
  Version: "版本",
  "View script source": "查看脚本源码",
  Viewer: "查看者",
  "Waiting for approval": "等待批准",
  "WebSocket request with": " WebSocket 请求，返回",
  "Welcome to Headplane": "欢迎使用 Headplane",
  "When enabled, use the DNS servers listed below to resolve names outside the tailnet. When disabled (default), devices will prefer their local DNS configuration.":
    "启用后，使用下面列出的 DNS 服务器解析 tailnet 之外的名称。禁用时（默认），设备会优先使用本地 DNS 配置。",
  "Where the traffic is allowed to go. A destination without a port becomes :* (all ports).":
    "流量允许到达的位置。不带端口的目标会变成 :*（所有端口）。",
  "Whether the machine is behind a difficult NAT that varies the machine’s IP address depending on the destination.":
    "机器是否位于困难的 NAT 之后，其 IP 地址会随目标而变化。",
  "Whether the machine needs to traverse NATs with hairpinning.":
    "机器是否需要通过发夹 NAT 进行通信。",
  "Whether this machine can act as an exit node for your tailnet.":
    "此机器能否作为 tailnet 的出口节点。",
  "Who is allowed to open the SSH session.": "允许打开 SSH 会话的对象。",
  "Windows 10+": "Windows 10 及以上",
  Yes: "是",
  "You can now close this window.": "现在可以关闭此窗口。",
  "You can only create keys for your own user.": "你只能为自己的用户创建密钥。",
  "You do not have permission to act on this machine": "你没有权限操作此机器",
  "You do not have permission to manage machines": "你没有权限管理机器",
  "You do not have permission to manage pre-auth keys": "你没有权限管理预授权密钥",
  "You do not have permission to manage this user's pre-auth keys":
    "你没有权限管理此用户的预授权密钥",
  "You do not have permission to modify IAM settings.": "你没有权限修改 IAM 设置。",
  "You do not have permission to read the ACL policy.": "你没有权限读取 ACL 策略。",
  "You do not have permission to update users": "你没有权限更新用户",
  "You do not have permission to view IAM settings.": "你没有权限查看 IAM 设置。",
  "You do not have permission to view this page. Please contact your administrator.":
    "你没有权限查看此页面。请联系管理员。",
  "You do not have permission to write to the ACL policy": "你没有权限写入 ACL 策略",
  "You do not have the necessary permissions to edit the Access Control List policy. Please contact your administrator to request access or to make changes to the ACL policy.":
    "你没有编辑访问控制列表策略所需的权限。请联系管理员申请权限，或请其修改 ACL 策略。",
  "You do not have the necessary permissions to edit the Authentication Restrictions settings. Please contact your administrator to request access or to make changes to these settings.":
    "你没有编辑身份验证限制设置所需的权限。请联系管理员申请权限，或请其修改这些设置。",
  "You do not have the necessary permissions to generate pre-auth keys. Please contact your administrator to request access or to generate a pre-auth key for you.":
    "你没有生成预授权密钥所需的权限。请联系管理员申请权限，或请其为你生成预授权密钥。",
  "You have been logged out": "你已退出登录",
  "You may be using an unsupported version of Headscale or this may be a bug.":
    "你可能在使用不受支持的 Headscale 版本，或者这是一个缺陷。",
  "You'll need to link your user account to a Headscale user before you can use Browser SSH.":
    "使用浏览器 SSH 之前，需要先把你的用户账户关联到一个 Headscale 用户。",
  "You've successfully authenticated but don't have access to the dashboard. You can still connect to your Headscale network by installing Tailscale.":
    "你已成功认证，但没有控制台访问权限。你仍可以安装 Tailscale 来连接 Headscale 网络。",
  "Your account is linked to Headscale user": "你的账户已关联到 Headscale 用户",
  "Your account isn't linked to a Headscale user. Ask your administrator to create one for you.":
    "你的账户尚未关联到 Headscale 用户。请让管理员为你创建一个。",
  "Your permissions do not allow you to modify the DNS settings for this tailnet.":
    "你的权限不允许修改此 tailnet 的 DNS 设置。",
  "Your policy contains comments. Saving here rewrites the policy and drops them.":
    "策略包含注释。在这里保存会重写策略并丢弃注释。",
  "`expiry` must be a whole number of days.": "`expiry` 必须是整数天数。",
  "already exists": "已存在",
  "already exists.": "。",
  and: "和",
  "and IP address": "，IP 地址为",
  "and are automatically linked to a Headplane account.": "，并会自动关联到 Headplane 账户。",
  "and the": "以及",
  are: "均未",
  as: "以",
  "be the last character.": "作为最后一个字符。",
  "claim.": "声明。",
  documentation: "文档",
  "for common errors.": "了解常见错误。",
  "for details about check mode.": "了解 check 模式的详情。",
  "for details.": "了解详情。",
  "for more information.": "了解更多信息。",
  "for the full syntax.": "了解完整语法。",
  group: "用户组",
  "iOS 15+": "iOS 15 及以上",
  in: "所在的",
  "in your Headscale configuration.": "（在 Headscale 配置中）。",
  "in your Headscale configuration. This means that the ACL file cannot be edited through the web interface. In order to resolve this, you'll need to set":
    "。这意味着无法通过 Web 界面编辑 ACL 文件。要解决此问题，请将",
  "in your policy, so no rule will match": " 中声明，因此没有规则会匹配",
  "in your terminal.": "来生成。",
  is: "尚未",
  "is a valid API key.": "是有效的 API 密钥。",
  "is added for you. See the": "会自动补上。请参阅",
  "is not currently connected to the Tailnet.": "当前未连接到 Tailnet。",
  it: "它",
  "key expiry": "密钥过期",
  "letters, numbers, dots, dashes and underscores, with at most one @ that cannot":
    "字母、数字、点、短横线和下划线，@ 最多出现一次，并且不能",
  "macOS Big Sur+": "macOS Big Sur 及以上",
  "mode for ACLs by updating your Headscale configuration. This will allow Headplane to manage the ACL policy directly through the web interface.":
    " 模式。请更新 Headscale 配置，这样 Headplane 就能通过 Web 界面直接管理 ACL 策略。",
  "mode for ACLs, and the specified policy file is missing.":
    " 模式运行 ACL，且指定的策略文件不存在。",
  "not declared under": "在策略的",
  "records are supported.": "记录。",
  "repository with the details below.": "仓库提交问题，并附上以下详情。",
  "section of your policy. See the": "部分。请参阅",
  sponsoring: "赞助",
  "tab and the visual editor will come back.": "标签页中修复，可视化编辑器会随之恢复。",
  tag: "标签",
  them: "它们",
  "this link": "此链接",
  "through your OIDC provider": "（通过 OIDC 提供商）",
  to: "设置为",
  "to support development.": "以支持开发。",
  "troubleshooting guide": "故障排除指南",
  "when Magic DNS is enabled.": "（启用 Magic DNS 时）。",
  "will no longer point to this machine.": "将不再指向此机器。",
};

/**
 * Rewrites a whole mixed phrase so placeholders can move.
 * Used for template literals and JSX children that mix text with expressions.
 */
export const templates: Record<string, string> = {
  "A {copy.title} with this name already exists.": "已存在同名{copy.title}。",
  "Add to {label}": "添加到{label}",
  "All {typeName} are permitted to authenticate.":
    "未限制{typeName}，所有{typeName}均可通过身份验证。",
  "Browser SSH is broken on Headscale {warning.version}":
    "Headscale {warning.version} 上的浏览器 SSH 无法使用",
  "Change role for {displayName}?": "更改 {displayName} 的角色？",
  "Change the owner of {machine.givenName}": "更改 {machine.givenName} 的所有者",
  "Connecting to {hostname}…": "正在连接 {hostname}…",
  "Copied {name} to clipboard": "已将 {name} 复制到剪贴板",
  "Could not update the ACL policy: {message}": "无法更新 ACL 策略：{message}",
  "Delete {name}?": "删除 {name}？",
  'Domain "{domain}" not found in allowed domains.': "在允许的域名中找不到“{domain}”。",
  "Edit ACL groups for {displayName}": "编辑 {displayName} 的 ACL 用户组",
  "Edit ACL tags for {machine.givenName}": "编辑 {machine.givenName} 的 ACL 标签",
  "Edit host {name}": "编辑主机 {name}",
  "Edit machine name for {machine.givenName}": "编辑 {machine.givenName} 的机器名称",
  "Edit route settings of {node.givenName}": "编辑 {node.givenName} 的路由设置",
  "Edit {copy.title} {name}": "编辑{copy.title} {name}",
  "Enter a new username for {user.name || user.displayName}. Changing a username will not update any ACL policies that may refer to this user by their old username.":
    "为 {user.name || user.displayName} 输入新用户名。更改用户名不会更新 ACL 策略中对该用户旧用户名的引用。",
  "Error {error.status}": "错误 {error.status}",
  "Error: {rootError.name}": "错误：{rootError.name}",
  "Expire {machine.givenName}": "使 {machine.givenName} 过期",
  "Expired {formatter.format(new Date(expiry!))}":
    "已于 {formatter.format(new Date(expiry!))} 过期",
  "Failed to join Tailnet: {error instanceof Error ? error.message : error}":
    "加入 Tailnet 失败：{error instanceof Error ? error.message : error}",
  'Group "{group}" not found in allowed groups.': "在允许的用户组中找不到“{group}”。",
  'Invalid group name: {invalid.join(", ")}': '无效的用户组名称：{invalid.join(", ")}',
  "Link Headscale user for {displayName}": "为 {displayName} 关联 Headscale 用户",
  "Machine with ID {nodeId} not found": "找不到 ID 为 {nodeId} 的机器",
  "Matches users with <user>@{domain}": "匹配邮箱为 <user>@{domain} 的用户",
  "New {copy.title}": "新建{copy.title}",
  "No node found with hostname {hostname}.": "找不到主机名为 {hostname} 的节点。",
  "No user found with id: {headscaleUserId}": "找不到 ID 为 {headscaleUserId} 的用户",
  "OIDC is unavailable: {oidc.reason}": "OIDC 不可用：{oidc.reason}",
  "Permitted {typeName}": "允许的{typeName}",
  "Remove {machine.givenName}": "移除 {machine.givenName}",
  "Rename {user.name || user.displayName}?": "重命名 {user.name || user.displayName}？",
  "Showing {filteredAndSortedNodes.length} of {loaderData.populatedNodes.length} machines":
    "显示 {filteredAndSortedNodes.length} / {loaderData.populatedNodes.length} 台机器",
  "Tailnet node stopped: {error}": "Tailnet 节点已停止：{error}",
  "The ACL policy could not be parsed: {parsed.error}": "无法解析 ACL 策略：{parsed.error}",
  "This will make {targetDisplayName} the new owner of this Headplane instance. You will be demoted to an Admin. This action cannot be easily undone.":
    "这将使 {targetDisplayName} 成为此 Headplane 实例的新所有者。你会被降为管理员。此操作不容易撤销。",
  "Transfer ownership to {targetDisplayName}?": "将所有权转移给 {targetDisplayName}？",
  'User "{user}" not found in allowed users.': "在允许的用户中找不到“{user}”。",
  '{days} day{days !== 1 ? "s" : ""} ago': "{days} 天前",
  '{days} day{days !== 1 ? "s" : ""}, {remainingHours} hour{remainingHours !== 1 ? "s" : ""} ago':
    "{days} 天 {remainingHours} 小时前",
  "{draft.action} — not known to Headplane": "{draft.action} — Headplane 无法识别",
  '{hours} hour{hours !== 1 ? "s" : ""} ago': "{hours} 小时前",
  '{hours} hour{hours !== 1 ? "s" : ""}, {remainingMinutes} minute{remainingMinutes !== 1 ? "s" : ""} ago':
    "{hours} 小时 {remainingMinutes} 分钟前",
  "{loaderData.populatedNodes.length} machines": "{loaderData.populatedNodes.length} 台机器",
  '{minutes} minute{minutes !== 1 ? "s" : ""} ago': "{minutes} 分钟前",
  '{months} month{months !== 1 ? "s" : ""} ago': "{months} 个月前",
  '{months} month{months !== 1 ? "s" : ""}, {remainingDays} day{remainingDays !== 1 ? "s" : ""} ago':
    "{months} 个月 {remainingDays} 天前",
  "{page} Unavailable": "{page}不可用",
  '{usedBy.length} machine{usedBy.length === 1 ? "" : "s"}: {usedBy.join(", ")}':
    '{usedBy.length} 台机器：{usedBy.join(", ")}',
};

/**
 * User-visible strings left in English on purpose: product names, sample
 * values, protocol tokens, CLI commands, and identifiers.
 */
export const intentionalEnglish: readonly string[] = [
  "12h",
  "2001:db8::ff00:42:8329",
  "<user>",
  "A",
  "AAAA",
  "DNS",
  "Headplane",
  "Headscale",
  "ID",
  "IPv6",
  "John Doe",
  "Linux",
  "Magic DNS",
  "NAT-PMP",
  "OS",
  "PCP",
  "SSH",
  "UDP",
  "UPnP",
  "Windows",
  "admin",
  "alice@",
  "autogroup:nonroot",
  "curl -fsSL https://tailscale.com/install.sh | sh",
  "example.com",
  "group:eng",
  "group:example",
  "group:ops",
  "headplane",
  "hskey-authreq-XXXXXXXXXXXXXXXXXXXXXXXX",
  "https://www.gravatar.com/avatar/{hash}?s=200&d=identicon&r=x",
  "john_doe",
  "my-new-name",
  "my-new-user",
  "name@example.com",
  "office",
  "server, prod",
  "ssh-{hex}-{username}",
  "tag:example",
  "tag:server",
  "tag:web:80,443",
  "tailscale up --login-server={data.server}",
  "tailscale up --login-server={url} --authkey {createdKey}",
  "tcp",
  "test.example.com",
  "ts.net",
  "width=device-width, initial-scale=1",
  "{copy.prefix}example",
  "{node.givenName}.{magic}",
];
