import random

def main():
  print("You came to hear your internal misery, eh")
  print("Very well. As you wish...\n")
  insults()

def insults():
  mean = ["Thy wit is as dull as a rusted blade", "Even the RATS in the dungeon make more melodious tunes than thee!",
          "Thine music sounds like garbage in me ears", "Thy crackly voice grates upon mine ears and brings blood", "Thine face makes me nausea down in me toes"]
  more_mean = ["Thou a pitiful waste of talent", "Thou smell ratcheter than mine trash", "Thine voice sound like a horde of dying cats", "Thou breath smells fouler than putrid fish", "Thou sends fair maidens running away in fear",
               "Thy verses lack wit, thou brain no work, thou thoughts more foul than the sewer"]
  print("\n")
  print(random.choice(mean))
  print(random.choice(more_mean))
  print("* * * * * *")
  print("Reload this site to learn more about how useless thou art...")
  print("Pity. Thou disgrace me and bring shame upon thee family")
  print("Hopefully thou can redeem thyself one day in misery.")
  

main()
  
