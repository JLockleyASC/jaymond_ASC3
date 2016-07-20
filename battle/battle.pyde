

board = [['0', '0', '0', '0', '0'], ['0', '0', '0', '0', '0'], ['0', '0', '0', '0', '0'], ['0', '0', '0', '0', '0'], ['0', '0', '0', '0', '0']]
board[int(random(0,5))][int(random(0,5))] = 1
def setup():
    size(500,500)
    background(0)
    
def draw():
    global mx
    global my
    global board
    for i in range(len(board)):
        for j in range(len(board)):
            if board[i][j] == 2:
                fill(0,0,0)
            else:
                rect(i*100,j*100,100,100)
    if mousePressed:
        mx = mouseX / 100
        my = mouseY / 100
        board[mx][my] = 2
        if board[mx][my] == 1:
            print("You Win")
        elif board[mx][my] != 1:
            print("You Lose")