# Discord Presence Changer

This project allows you to automatically change your Discord presence (status, activity, and voice channel) for multiple accounts simultaneously.

## Installation

1. Clone the repository:
```
git clone https://github.com/Javadkarami-com/Discord-account-handler.git
```

2. Install the required dependencies:
```
cd discord-presence-changer
npm install
```

3. Configure the `setting.json` file:
   - `channelId`: The ID of the voice channel you want the accounts to join.
   - `tokens`: An array of Discord bot tokens for the accounts you want to use.
   - `ActivityName`: An array of activity names to be used.
   - `status`: An array of status options to be used.
   - `ActivityType`: An array of activity types to be used.

## Usage

1. Run the script:
```
node index.js
```

The script will log in to each account, set the status, activity, and join the specified voice channel.

## Contributing

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request. Contributions are welcome!

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test them.
4. Commit your changes and push the branch.
5. Submit a pull request.
