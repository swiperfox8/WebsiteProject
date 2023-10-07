import random

def main():
  print("You came to hear your internal misery, eh")
  print("Very well. As you wish...\n")
  insults()

def insults():
  mean = ["Thy wit is as dull as a rusted blade", "Even the RATS in the dungeon make more melodious tunes than thee!",
          "Thine music sounds like garbage in me ears", "Thy crackly voice grates upon mine ears and brings blood", "Thine face makes me nausea down in me toes"]
  print("\n")
  print(random.choice(mean))
  print("* * * * * *")
  print("Reload this site to learn more about how useless thou art...")
  print("Pity. Thou disgrace me and bring shame upon thee family")
  

main()
  
