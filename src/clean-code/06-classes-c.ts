;(() => {
	// No aplicando el principio de responsabilidad única

	type Gender = 'M' | 'F'

	interface PersonProps {
		name: string
		gender: Gender
		birthdate: Date
	}

	class Person {
		public name: string
		public gender: Gender
		public birthdate: Date

		constructor({ name, gender, birthdate }: PersonProps) {
			this.name = name
			this.gender = gender
			this.birthdate = birthdate
		}
	}

	interface UserProps {
		email: string
		role: string
	}

	class User {
		public email: string
		public role: string
		public lastAccess: Date

		constructor({ email, role }: UserProps) {
			this.email = email
			this.role = role
			this.lastAccess = new Date()
		}

		checkCredentials() {
			return true
		}
	}

	interface SettingsProps {
		workingDirectory: string
		lastOpenFolder: string
	}

	class Settings {
		public workingDirectory: string
		public lastOpenFolder: string

		constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
			this.workingDirectory = workingDirectory
			this.lastOpenFolder = lastOpenFolder
		}
	}

	interface UserSettingsProps {
		email: string
		role: string
		name: string
		gender: Gender
		birthdate: Date
		workingDirectory: string
		lastOpenFolder: string
	}

	class UserSettings {
		public person: Person
		public user: User
		public settings: Settings

		constructor({
			birthdate,
			email,
			gender,
			lastOpenFolder,
			name,
			role,
			workingDirectory,
		}: UserSettingsProps) {
			this.person = new Person({ name, birthdate, gender })
			this.user = new User({ email, role })
			this.settings = new Settings({ lastOpenFolder, workingDirectory })
		}
	}

	const userSettings = new UserSettings({
		birthdate: new Date('1985-10-21'),
		email: 'fernando@google.com',
		gender: 'M',
		lastOpenFolder: '/home',
		name: 'Fernando',
		role: 'Admin',
		workingDirectory: '/usr/home',
	})

	console.log({ userSettings })
})()
