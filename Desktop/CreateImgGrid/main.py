from PIL import Image
from modules.Files import FilesList

#file_list = FilesList(r"C:\Users\41794\OneDrive\Bureau\sq")
file_list = FilesList(r"C:\Users\41794\Desktop\CreateImgGrid\seqence")
file_list.GetList()
imgList = file_list.GetFiles()
print(imgList)

class ImageGrid():
    def __init__(self, img_list:list , size:tuple, padding:int):
        self.imgList = img_list
        self.size = size
        self.padding = padding
        self.Gridtemplate = 2
        self.Colum = 0
        self.Row = 0
        self.Img_grid = self.createGrid()

    def CreateCell(self, newimg , Images):
        count = 0
        for img in Images:
            count += 1
            if self.Colum > self.Gridtemplate :
                self.Colum = 0
                self.Row +=1
                    
            SizeX = int((newimg.width/self.Gridtemplate)-self.padding)
            SizeY = int((newimg.height/self.Gridtemplate)-self.padding)
            Img = img.resize((SizeX , SizeY) ,Image.LANCZOS)
            newimg.paste(Img , (self.Colum * (SizeX -self.padding ),(SizeY -self.padding ) * self.Row))

            self.Colum += 1
        print(count)
    
    def createGrid(self):
        newimg = Image.new("RGBA", self.size , (0,0,0,0))
   
        Images = [ Image.open(self.imgList[i]) for i in self.imgList]
        
        if len(self.imgList) < 0 : assert "Le nombre d'image doit etre plus grande que 0"
        if len(self.imgList) > 64 : assert "Le nombre d'image ne doit pas etre plus grande que 64"
        if len(self.imgList) > 4 and len(self.imgList) <= 16 : self.Gridtemplate = 4
        if len(self.imgList) > 16 and len(self.imgList) <= 64 : self.Gridtemplate = 8

        self.CreateCell(newimg , Images)

        return newimg



    def show(self):
        self.Img_grid.show()
    def save(self , name="My8X8.png"):
        self.Img_grid.save(name)




newGrid = ImageGrid(imgList , (1024,1024) , 1)
newGrid.show()
newGrid.save()