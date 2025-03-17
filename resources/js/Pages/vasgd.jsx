{/* <div>
<InputLabel htmlFor="name" value="Name" />

<TextInput
    id="name"
    name="name"
    value={data.name}
    className="mt-1 block w-full"
    autoComplete="name"
    isFocused={true}
    onChange={(e) => setData('name', e.target.value)}
    required
/>

<InputError message={errors.name} className="mt-2" />
</div>

<div className="mt-4">
<InputLabel htmlFor="email" value="Email" />

<TextInput
    id="email"
    type="email"
    name="email"
    value={data.email}
    className="mt-1 block w-full"
    autoComplete="username"
    onChange={(e) => setData('email', e.target.value)}
    required
/>

<InputError message={errors.email} className="mt-2" />
</div>

<div className="mt-4">
<InputLabel htmlFor="password" value="Password" />

<TextInput
    id="password"
    type="password"
    name="password"
    value={data.password}
    className="mt-1 block w-full"
    autoComplete="new-password"
    onChange={(e) => setData('password', e.target.value)}
    required
/>

<InputError message={errors.password} className="mt-2" />
</div>

<div className="mt-4">
<InputLabel
    htmlFor="password_confirmation"
    value="Confirm Password"
/>

<TextInput
    id="password_confirmation"
    type="password"
    name="password_confirmation"
    value={data.password_confirmation}
    className="mt-1 block w-full"
    autoComplete="new-password"
    onChange={(e) =>
        setData('password_confirmation', e.target.value)
    }
    required
/>

<InputError
    message={errors.password_confirmation}
    className="mt-2"
/>
</div>

<div className="mt-4 flex items-center justify-end">
<Link
    href={route('login')}
    className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
>
    Already registered?
</Link>

<PrimaryButton className="ms-4" disabled={processing}>
    Register
</PrimaryButton>
</div> */}

////////////////////////////////login
{/* <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 block">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData('remember', e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="mt-4 flex items-center justify-end">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout> */}