def main():
    lines = file('rain.in')
    for line in lines:
        num = int(line)
        if num == 0: break
        readings = [float(reading)
                for reading in next(lines).split()
                if float(reading) >= 0]
        if not readings:
            print "NONE"
        else:
            print average(readings)

def average(nums):
    return sum(nums)/len(nums)

if __name__ == "__main__":
    main()

