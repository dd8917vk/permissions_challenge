# permissions_challenge

# In this challenge you will be required to translate proper unix file permissions from their string format, to an octal format.  
# For example, a linux file permissions is as follows:
    - r - stands for read, assigned a value of 4
    - w - stands for write, assigned a value of 2
    - x - stands for execute, assigned a value of 1

# A standard linux file permission looks like this:
    - rwx - in this instance the rwx bits are set to on, so the octal value of this filer permission would be 7.  This is derived from simply tallying up r+w+x with the cumulative total of 7.  

# Another example may be when a bit is in the off permission.  For intance, a '-' character is a 0 value and is not added to the cumulative permission total.
    - r-x  in this instance the cumulative total would translate to 5, because 
    - r+x==5 or 4+1==5.  

# Your task is to convert string file permissions values to octal values.  Given a set of 3 permission strings, convert it to an octal format.  Your output should be a string of the length of 3 consectuve numbers, no place value exceeding the string represnetation of the number 7.

# Example Output:
- print(perm('rwxr-xr-x')) # should = 755
- print(perm('r-xr-xr-x')) # should = 555
- print(perm('rw-rw-rw-')) # should = 666


You may want to google Linux file permissions before proceeding with this challenge.
