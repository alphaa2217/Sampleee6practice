from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
import time

# Specify the path to your ChromeDriver
chrome_service = Service("C:\\Program Files\\chromedriver-win64\\chromedriver.exe")

# Set up the WebDriver for Chrome
driver = webdriver.Chrome(service=chrome_service)

try:
    # Step 1: Open Google in the browser
    driver.get("https://www.google.com")
    
    # Step 2: Locate the search box using the name attribute
    search_box = driver.find_element(By.NAME, "q")
    
    # Step 3: Enter the search term "https://cmrcet.ac.in/" and submit the form
    search_box.send_keys("https://cmrcet.ac.in/")
    search_box.send_keys(Keys.RETURN)
    
    # Optional: Wait for a few seconds to see the search results
    time.sleep(20)
    
finally:
    # Step 4: Close the browser
    driver.quit()
