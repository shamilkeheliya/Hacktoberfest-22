


name = input("Type your name:  ")
print("Welcome",name,'to this adventure!!')

answer = input('You are on a dirt road, it has come to an end and you can go right or left')

if answer == 'left':
    answer = input("You come to a river. you can walk around it or swim across? Type walk to walk and swim to swim")

    if answer == 'walk':
        print('You walked for many miles, ran out of water and lost the game')
    elif answer == 'swim':
        print("You swam across and were eaten by an alligator")
    else:
        print("Not a valid option. You Lose")
elif answer == 'right':
    answer = input("You come to a bridge, it looks wobbly, do you want to cross or head back(cross/back)?")

    if answer == 'back':
        print('You go back and lose')
    elif answer == 'cross':
        answer= input("You cross the bridge and meet a stranger. Do you talk to them. Yes or no? ")
        
        if answer == 'yes':
            print("You talked with the stranger and they give you gold. You WIN")
        elif answer == 'no':
            print('you ignored the stranger and they are offended.You Lose')
        else:
            print("Not a valid option. You Lose")

    else:
        print("Not a valid option. You Lose")
else:
    print("Not a valid option. You Lose")

print("Thank You for trying", name)