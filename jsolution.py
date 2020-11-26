#PSEUDOCODE

'''
Define function to take in an input string
Separate input string into array
Convert each index of the array
    r = 4
    w = 2
    x = 1
    - = 0
Join array into a single string
Return the result

'''

def convert(str):
    if len(str) != 9:
        print('Error:  String size invalid.')
        return('Error:  String size invalid.')
    else:
        octalList = []
        outputList = []
        for i in str:
            # if octalList < 3:
                if i == 'r':
                    octalList.append(4)
                elif i == 'w':
                    octalList.append(2)
                elif i == 'x':
                    octalList.append(1)
                elif i == '-':
                    octalList.append(0)
        outputList.append(octalList[0] + octalList[1] +octalList[2])
        outputList.append(octalList[3] + octalList[4] +octalList[5])
        outputList.append(octalList[6] + octalList[7] +octalList[8])
                
        print(outputList)
        return(outputList)

convert('rwxr-xr-x')