import random

def main():
  print("You came to hear your internal misery, eh")
  print("Very well. As you wish...\n")
  insults()

def insults():
  mean = ["You're a slimeball", "Worthless scum", "bah, humbug", "Go make yourself useful peasant", "Tell me some jokes, that's all you're good for anyway"]
  print("\n")
  print(random.choice(mean))
  print("* * * * * *")
  print("Reload this site to learn more about how useless you are...")
  print("Pity. You disgrace me")
  

main()
  
