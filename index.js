from v_wallet import generateCosmosWallet

# Number of wallets to generate
num_wallets = 10

# Generate 10 Cosmos wallets
wallets = [generateCosmosWallet() for _ in range(num_wallets)]

# Print out the wallet information
for i, wallet in enumerate(wallets):
    print(f"Wallet {i+1}:")
    print("Address:", wallet.address)
    print("Private Key:", wallet.private_key)
    print("Public Key:", wallet.public_key)
    print()